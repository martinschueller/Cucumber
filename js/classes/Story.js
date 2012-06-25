Story = function() {

	// private members
	var pop;
	var snd = new Audio('');

	var videoWidth;
	var videoHeight;
	var targetTag;
	var popcornTarget;
	var popcornWrapper;
	var storyID;
	var storyData;

	
	
	var init = function (target, val, id){
		targetTag= target;
		storyID = id;
		storyData = val;
		
		$(targetTag).append('<div class="story" id="' + storyID +'"><section><section class="videoWrapper" id="videoWrapper' + storyID +'"><div id="videoOverlay" ></div></section><section id="soundWrapper"></section><section class="storytitle" id="title' + storyID +'"></section></section></div>');		
		popcornWrapper = ".story#" + storyID;
		popcornTarget = "#videoWrapper" + storyID;
		pop = Popcorn.smart(popcornTarget, storyData.data.video_link);
		 popcorn();
		 setHeight();
		 
		$(popcornTarget + ' #videoOverlay').click(function() {
				pop.play(1);

			});
		
	}
	
	var setHeight = function() {

		setTimeout(function() {

			videoWidth = $(popcornTarget + ' object').width();
			videoHeight = $(popcornTarget + ' object').height();

			if (videoWidth != 0) {
				$(popcornWrapper).width(videoWidth);
				$(popcornWrapper).height(videoHeight);
				$(popcornTarget).width(videoWidth);
				$(popcornTarget + ' #videoOverlay').width(videoWidth);
				$(popcornTarget + ' #videoOverlay').height(videoHeight);
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
			target : "title" + storyID,
			title: "",
			text: "",
			innerHTML : "I love</br>" + storyData.data.stuff + "</br>because</br>" + storyData.data.reason,
			direction : "up"
		});
		pop.exec(1, function() {

		});
		pop.exec(9, function() {
			playSound();

		});
		pop.exec(15, function() {
			pop.mute();

		});
		
		pop.exec(25, function() {
			$(popcornTarget + ' #videoOverlay').fadeTo('slow', 0.8);
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
						'http://www.piano-midi.de/ogg/beethoven/beethoven_opus10_3.ogg');
			} else if (snd.canPlayType('audio/mp3')) {
				snd = new Audio(
						'http://www.piano-midi.de/mp3_link.php?id=443c105320e4ccccbcde628680f356af&file=beethoven_opus10_3.mp3');
			}

			snd.play();

	}

	//public members
	return {
		init : init

	};

}