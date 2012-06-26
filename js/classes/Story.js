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
	
	var browserWidth = parseInt( document.body.offsetWidth )-50;
	var videoColumns = 4;
	var videoRatio;

	
	
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
		 
		$(popcornTarget + ' #videoOverlay').hover(function() {
				pop.play();
				$(popcornTarget + ' #videoOverlay').css( "opacity", "0.0" );

			},function() {
				pop.pause();
				$(popcornTarget + ' #videoOverlay').css( "opacity", "0.7" );

			} );
		
		if( storyData.data.hate == 0 ) {
			document.getElementById( storyID ).style.borderTopColor = '#ED1E79';
		}
		else if( storyData.data.hate == 1 ) {
			document.getElementById( storyID ).style.borderTopColor = '#ffff00';
		}
	}
	
	var setHeight = function() {

		setTimeout(function() {

			videoWidth = $(popcornTarget + ' object').width();
			videoHeight = $(popcornTarget + ' object').height();

			if (videoWidth != 0) {
				
				
			//console.log( "original: videoWidth = " + videoWidth + " videoHeight = " + videoHeight );
			
			videoRatio = parseInt( videoHeight ) / parseInt( videoWidth );		
			

			
			videoWidth = browserWidth/videoColumns;
			videoHeight = videoRatio * videoWidth;
			
			//console.log( "videoWidth = " + videoWidth + " videoHeight = " + videoHeight + " browserWidth = " + browserWidth + " videoRatio = " + videoRatio);


				$(popcornWrapper).width(videoWidth);
				$(popcornWrapper).height(videoHeight);
				$(popcornTarget).width(videoWidth);
				$(popcornTarget + ' #videoOverlay').width(videoWidth);
				$(popcornTarget + ' #videoOverlay').height(videoHeight);
				//console.log('video width: ' + videoWidth);
				
				$(popcornTarget + ' object' ).width( videoWidth );
				$(popcornTarget + ' object' ).height( videoHeight );

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

