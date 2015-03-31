//on document load add event to make the bar small if not loaded at the top
//http://themenectar.com/demo/salient/


$(function(){
    $('#header-holder').data('size','big');
});

$(window).scroll(function(){
  var h = window.innerHeight;
    if($(document).scrollTop() > h-100)
    {
      var loc = 'images/UrbanFT_Logo_Color.png';
        if($('#header-holder').data('size') == 'big')
        {
            $('#header-holder').data('size','small');
            /*$('#header_nav').stop().animate({
                height:'60px'
            },250);*/

            $('#header-holder').stop().animate({
                paddingTop:'15px',
                backgroundColor:'#fff'
            },300);

            $('.menu').stop().animate({
                height:'40px'
            },250);

            $('#header-holder ul li a').stop().animate({
                paddingBottom:'17px',
                color: '#747474'
            },250);

            /*$('#default-logo').stop().animate({
                paddingBottom:'17px'
            },250);*/

            //$('.default-logo').attr("src",loc);
            $('.default-logo').attr({
                src:loc,
              });

            $('.default-logo').stop().animate({

                  height: "36px"
                  //style:"height: 30px"

            },300);




        }
    }
    else
    {
      var loc = 'images/UrbanFT_Logo_White.png';
        if($('#header-holder').data('size') == 'small')
        {
            $('#header-holder').data('size','big');
            /*$('#header_nav').stop().animate({
                height:'86px'
            },250);*/
            $('#header-holder').stop().animate({
                paddingTop:'26px',
                backgroundColor:'transparent'
            },300);

            $('.menu').stop().animate({
                height:'60px'
            },250);

            $('#header-holder ul li a').stop().animate({
                paddingBottom:'35px',
                color: '#fff'
            },250);

            $('.default-logo').attr({
                src:loc,
                //style:"height: 30px"
              });

              $('.default-logo').stop().animate({
                  height: "45px"
                  //style:"height: 30px"
                },300);
        }
    }
});
