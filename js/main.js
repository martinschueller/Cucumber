document.addEventListener("DOMContentLoaded", function() {
	var pop = Popcorn.vimeo("#videoWrapper",
			"http://player.vimeo.com/video/44562315");
	var snd = new Audio('');
	//	pop.image({
	//		start : 20,
	//		end : 30,
	//		src: "img/frame.png",
	//		target : "title"
	//	});

	var videoWidth;
	pop.controls( false );
	pop.timeline({
		start : 25,
		target : "title",
		title : "This is a title",
		text : "this is some interesting text that goes inside",
		innerHTML : "hallo hallo",
		direction : "up"
	});
	pop.exec( 1, function() {
		videoWidth = $('#videoWrapper object').width();
		videoHeight = $('#videoWrapper object').height();
		$('.story').width(videoWidth);
		$('#videoOverlay').width(videoWidth);
		$('#videoOverlay').height(videoHeight);
	});
	pop.exec( 13, function() {
		play();
		
	});
	pop.exec( 15, function() {
		pop.mute();
		
	});
	pop.exec( 29, function() {
	    pop.pause();
	    snd.pause();
	});
	pop.play();

	//var pinkHighHeels = Popcorn.soundcloud("#soundWrapper", "http://soundcloud.com/marnschler/pinkhighheels/s-N9tSa");	
	//var popcorn = Popcorn.soundcloud( "#soundWrapper", "http://soundcloud.com/rhymesayers/brother-ali-us" );
	//popcorn.play();
	
	function play() {
		 
	    if (window.HTMLAudioElement) {
	 
	      if(snd.canPlayType('audio/ogg')) {
	        snd = new Audio('http://www.position-relative.net/creation/audiotag/Mogwai2009-04-29_acidjack_t16.ogg');
	      }
	      else if(snd.canPlayType('audio/mp3')) {
	        snd = new Audio('http://www.position-relative.net/creation/audiotag/Mogwai2009-04-29_acidjack_t16.mp3');
	      }
	 
	      snd.play();
	    }
	    else {
	      alert('HTML5 Audio is not supported by your browser!');
	    }
	    
	}

});

