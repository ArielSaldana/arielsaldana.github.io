$(function() {
	$('#content').waypoint(function() {
		$('#nav').toggleClass('stuck');
		}, { offset: 160 }
	);
});

// Where the swf lives for Flash fallback
videojs.options.flash.swf = "/video/video-js.swf"
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

$(function() {
	if (!isTouch) {
		// Play Background video if not a touch device
		BV = new $.BigVideo({ container: $('#video') });
		BV.init();
		BV.show('http://player.vimeo.com/external/103432016.hd.mp4?s=bb57f2fa9774517f89a71b74d475be01',{doLoop:true});
	}

	// Play the feature video when you click play button and pause bkg video
	$("#play").click(function(e) {
		e.preventDefault();

		if (isTouch) {
			// If a touch device, open video in new window
			window.open('http://player.vimeo.com/external/101380360.hd.mp4?s=7ea639d3669d59b33d372e64ed0332e8', '_self');
		} else {
			// If a non-touch device fade in overlay and play video, while pausing bkg video
			$("#feature-video").fadeIn(300);

			var myPlayer = videojs("feature");
			myPlayer.play();
			BV.getPlayer().pause();
		}
	});

	var myPlayer2 = videojs("feature");
	// Close the feature video when you click anywhere, or when its over and play bkg video
	$("#feature-video .close").click(function(e) {
		e.preventDefault();

		if (myPlayer2.paused()) {
			myPlayer2.play();
		}
		if (myPlayer2.play()) {
			myPlayer2.pause();
			$("#feature-video").fadeOut(300);
			BV.getPlayer().play();
		}
	});

	// Close the video when you hit escape key
	$(document).on("keydown", function (e) {
		if ( e.keyCode === 27 ) { // ESC
			if (myPlayer2.paused()) {
				myPlayer2.play();
			}
			if (myPlayer2.play()) {
				myPlayer2.pause();
				$("#feature-video").fadeOut(300);
				BV.getPlayer().play();
			}
		}
	});

	// Close the video when its over
	myPlayer2.ready(function(){
		this.on("ended", function(){
			$("#feature-video").fadeOut(300);
			BV.getPlayer().play();
		});
	});

	// Pause the bkg video when scrolled past it
	$("#content").waypoint(function(direction) {
		if (direction == 'down') {
			BV.getPlayer().pause();
		} else {
			BV.getPlayer().play();
		}
		}, { offset: 107 }
	);
});
