Story = function() {

	// private members
	var pop;
	var snd = new Audio('');

	var videoWidth;
	var videoHeight;
	var targetTag;

	
	
	var init = function (target, url){
		
		 pop = Popcorn.vimeo(target, url);
		 popcorn();
		 setHeight();
		 targetTag= target;
		$(targetTag + ' #videoOverlay').click(function() {
				pop.play(1);

			});
		
	}
	
	var setHeight = function() {

		setTimeout(function() {

			videoWidth = $(targetTag + ' object').width();
			videoHeight = $(targetTag + ' object').height();

			if (videoWidth != 0) {

				$('.story').width(videoWidth);
				$(targetTag + ' #videoOverlay').width(videoWidth);
				$(targetTag + ' #videoOverlay').height(videoHeight);
				//console.log('video width: ' + videoWidth);

			} else {
				//console.log('Video wrapper not loaded yet');
				setHeight();
			}
		}, 300);
	}
	
	var popcorn = function(){
		
		pop.controls(false);
		pop.timeline({
			start : 25,
			target : "title",
			title : "This is a title",
			text : "this is some interesting text that goes inside",
			innerHTML : "hallo hallo",
			direction : "up"
		});
		pop.exec(1, function() {

		});
		pop.exec(13, function() {
			playSound();

		});
		pop.exec(15, function() {
			pop.mute();

		});
		pop.exec(29, function() {
			pop.pause();
			snd.pause();
		});

		// var pinkHighHeels = Popcorn.soundcloud("#soundWrapper",
		// "http://soundcloud.com/marnschler/pinkhighheels/s-N9tSa");
		// var popcorn = Popcorn.soundcloud( "#soundWrapper",
		// "http://soundcloud.com/rhymesayers/brother-ali-us" );
		// popcorn.play();
		
		
	}
	
	



	var playSound = function (){

		
			console.log('sound gets loaded');
			if (snd.canPlayType('audio/ogg')) {
				snd = new Audio(
						'http://www.position-relative.net/creation/audiotag/Mogwai2009-04-29_acidjack_t16.ogg');
			} else if (snd.canPlayType('audio/mp3')) {
				snd = new Audio(
						'http://www.position-relative.net/creation/audiotag/Mogwai2009-04-29_acidjack_t16.mp3');
			}

			snd.play();

	}

	//public members
	return {
		init : init

	};

}