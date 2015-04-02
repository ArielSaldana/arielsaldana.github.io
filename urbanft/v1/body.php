<body class="cbp-spmenu-push">
  <div id="header-space" style="height: 86px;"></div>
    <div id="header-holder">
      <header id="bar">
        <div class="container">
          <div class="header-row">
            <div class="col span_3">
    					<a id="logo" href="http://themenectar.com/demo/salient">
    						<img class="default-logo" alt="Salient" src="images/salient-logo.png" style="height: 30px;">
    					</a>
    				</div>
            <nav role="navigation">
              <!--<div class="menu-mobile">
                <ul class="nav-links">
                  <li><span id="showRightPush" href="/html/">Menu</span></li>
                </ul>
                <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
            			<h3>Menu</h3>
            			<a href="#">Ariel Saldana</a>
            			<a href="#">Dulse daikon</a>
            			<a href="#">Zucchini garlic</a>
            			<a href="#">Catsear azuki bean</a>
            			<a href="#">Dandelion bunya</a>
            			<a href="#">Rutabaga</a>
            		</nav>
              </div>-->
              <ul class="nav-links">
                <li><a href="/html/">Our Story</a></li>
                <li><a href="/css/">Press</a></li>
                <li><a href="/js/">Blog</a></li>
                <li><a href="/jquery/">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
    <div id="hero">

      <section id="featured-text">
        <h1> Venue Tap API </h1>
      </section>

    </div>

    <div id="content">

    </div>
    <div id="content">

    </div>



<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/colors.js"></script>
<script src="js/jquery-navbar.js"></script>
<script>
$('.drawer-toggle').click(function(){
  $('.drawer').toggleClass('drawer__closed')
});
</script>
<script src="js/classie.js"></script>
		<script>
			var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
				menuRight = document.getElementById( 'cbp-spmenu-s2' ),
				menuTop = document.getElementById( 'cbp-spmenu-s3' ),
				menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
				showLeft = document.getElementById( 'showLeft' ),
				showRight = document.getElementById( 'showRight' ),
				showTop = document.getElementById( 'showTop' ),
				showBottom = document.getElementById( 'showBottom' ),
				showLeftPush = document.getElementById( 'showLeftPush' ),
				showRightPush = document.getElementById( 'showRightPush' ),
        logo = document.getElementById( 'logo' ),
				body = document.body;

			/*showLeft.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
				disableOther( 'showLeft' );
			};
			showRight.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRight' );
			};
			showTop.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuTop, 'cbp-spmenu-open' );
				disableOther( 'showTop' );
			};
			showBottom.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuBottom, 'cbp-spmenu-open' );
				disableOther( 'showBottom' );
			};*/
			/*showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
				disableOther( 'showLeftPush' );
			};*/
			showRightPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toleft' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
        classie.toggle( this, 'test-left');
        classie.toggle( logo, 'test-fade');
        //$('#logo').fadeOut(100);
				//disableOther( 'showRightPush' );
        /*$('.header-row ul').stop().animate({
            left:'-240px'
        },250);*/
			};

			function disableOther( button ) {
				if( button !== 'showLeft' ) {
					classie.toggle( showLeft, 'disabled' );
				}
				if( button !== 'showRight' ) {
					classie.toggle( showRight, 'disabled' );
				}
				if( button !== 'showTop' ) {
					classie.toggle( showTop, 'disabled' );
				}
				if( button !== 'showBottom' ) {
					classie.toggle( showBottom, 'disabled' );
				}
				if( button !== 'showLeftPush' ) {
					classie.toggle( showLeftPush, 'disabled' );
				}
				if( button !== 'showRightPush' ) {
					classie.toggle( showRightPush, 'disabled' );
				}
			}
		</script>


    <script>
    $(document).click(function() {
  //alert("me");
  //disableOther('showRightPush')
  //classie.toggle( showRightPush, 'disabled' );
});
$(".cbp-spmenu").click(function(e) {
  e.stopPropagation(); // This is the preferred method.
  return false;        // This should not be used unless you do not want
                       // any click events registering inside the div
});
</script>

</body>
