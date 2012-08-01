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

	var browserWidth = parseInt(document.body.offsetWidth) - 50;
	var videoColumns = 4;
	var videoRatio;
	var playing = false;
<<<<<<< HEAD

	var init = function(target, val, id) {
		targetTag = target;
=======
	
	
	var init = function (target, val, id){
		targetTag= target;
>>>>>>> 54850d48e11e188374fbc40c0ca3aae583d1fae8
		storyID = id;
		popcornTarget = "#videoWrapper" + storyID;
		console.log("this is the target inside the init class: "+ popcornTarget);
		storyData = val;
		
<<<<<<< HEAD
		$(targetTag)
				.append(
						'<div class="story" id="'
								+ storyID
								+ '"><div class="videoWrapper" id="videoWrapper'
								+ storyID
								+ '"><div id="videoOverlay"><br><br>' 
								+ storyData.stuff
								+ '</div></section><section id="soundWrapper"></div><section class="storytitle" id="title'
								+ storyID + '"></section></div>');
		popcornWrapper = ".story#" + storyID;
		
		pop = Popcorn.smart(popcornTarget, storyData.video_link);
		popcorn();
		setHeight();
			// $(popcornTarget + ' #videoOverlay').css( "opacity", "0.0" );

		if (storyData.hate == 0) {
			document.getElementById(storyID).style.borderTopColor = '#ED1E79';
		} else if (storyData.hate == 1) {
			document.getElementById(storyID).style.borderTopColor = '#ffff00';
=======
		$(targetTag).append('<div class="story" id="' + storyID +'"><div class="videoWrapper" id="videoWrapper' + storyID +'"><div id="videoOverlay" ></div></section><section id="soundWrapper"></div><section class="storytitle" id="title' + storyID +'"></section></div>');		
		popcornWrapper = ".story#" + storyID;
		popcornTarget = "#videoWrapper" + storyID;
		pop = Popcorn.smart(popcornTarget, storyData.data.video_link);
		 popcorn();
		 setHeight();
		 
		$(popcornTarget + ' #videoOverlay').hover(function() {
				//pop.play();
				$(popcornTarget + ' #videoOverlay').css( "opacity", "0.0" );

			},function() {
				//pop.pause();
				if(!playing){
					$(popcornTarget + ' #videoOverlay').css( "opacity", "0.7" );
				}
				

			} );
		$(popcornTarget + ' #videoOverlay').click(function() {
			if(!playing){
			pop.play();
			playing = true;
			}
			else
				{
				pop.pause();
				playing = false;
				
				}
			
			//$(popcornTarget + ' #videoOverlay').css( "opacity", "0.0" );

		});
		
		
		
		if( storyData.data.hate == 0 ) {
			document.getElementById( storyID ).style.borderTopColor = '#ED1E79';
		}
		else if( storyData.data.hate == 1 ) {
			document.getElementById( storyID ).style.borderTopColor = '#ffff00';
>>>>>>> 54850d48e11e188374fbc40c0ca3aae583d1fae8
		}
	}

	var setHeight = function() {

		// setTimeout(function() {
		//
		// videoWidth = $(popcornTarget + ' object').width();
		// videoHeight = $(popcornTarget + ' object').height();
		//
		// if (videoWidth != 0) {
		//				
		//				
		// //console.log( "original: videoWidth = " + videoWidth + " videoHeight
		// = " + videoHeight );
		//			
		// videoRatio = parseInt( videoHeight ) / parseInt( videoWidth );
		//			
		//
		//			
		// videoWidth = browserWidth/videoColumns;
		// videoHeight = videoRatio * videoWidth;
		//			
		// //console.log( "videoWidth = " + videoWidth + " videoHeight = " +
		// videoHeight + " browserWidth = " + browserWidth + " videoRatio = " +
		// videoRatio);
		//
		//
		// $(popcornWrapper).width(videoWidth);
		// $(popcornWrapper).height(videoHeight);
		// $(popcornTarget).width(videoWidth);
		// $(popcornTarget + ' #videoOverlay').width(videoWidth);
		// $(popcornTarget + ' #videoOverlay').height(videoHeight);
		// //console.log('video width: ' + videoWidth);
		//				
		// $(popcornTarget + ' object' ).width( videoWidth );
		// $(popcornTarget + ' object' ).height( videoHeight );
		//
		// } else {
		// //console.log('Video wrapper not loaded yet');
		// setHeight();
		// }
		// }, 300);
	}

	var popcorn = function() {
		
		if( storyData.hate == 0 ) {
			var tl1 = "<br><br>" + storyData.somewhere;
//			var tl2 = "<div id='storybg' style='background-image: url(./img/hate_frame.png);'><br><br><br>" + storyData.somewhere + "</div>";
//			var tl3 = "<div id='storybg' style='background-image: url(./img/hate_frame.png);'><br>" + storyData.stuff + "<br>in<br>" + storyData.somewhere + "</div>";
			var tl4 = "<div id='storybg' style='background-image: url(./img/hate_frame.png);'><br>" + storyData.stuff + "<br>in<br>" + storyData.somewhere + "<br><img src='./img/hate_then.png' vspace=10><br>" + storyData.reason + "</div>";
		}
		else {
			var tl1 = "<br><br>" + storyData.somewhere;
//			var tl2 = "<div id='storybg' style='background-image: url(./img/love_frame.png);'><br><br><br>" + storyData.somewhere + "</div>";
//			var tl3 = "<div id='storybg' style='background-image: url(./img/love_frame.png);'><br>" + storyData.stuff + "<br>in<br>" + storyData.somewhere + "</div>";
			var tl4 = "<div id='storybg' style='background-image: url(./img/love_frame.png);'><br>" + storyData.stuff + "<br>in<br>" + storyData.somewhere + "<br><img src='./img/love_because.png' vspace=10><br>" + storyData.reason + "</div>";
		}

		pop.controls(false);

		// black in the beginning
		pop.exec(0.1, function() {
			$(popcornTarget + ' #videoOverlay').fadeTo('slow', 1);
		});

		pop.exec(4, function() {
			$(popcornTarget + ' #videoOverlay').fadeTo('slow', 0);
		});

		pop.timeline({
			start : 10,
			end : 20,
			target : "title" + storyID,
			title: "",
			text: "",
			innerHTML : tl1, //"<br><br>" + storyData.somewhere,
			direction: "down"
		});
		
//		pop.timeline({
//			start : 10,
//			end : 15,
//			target : "title" + storyID,
//			title: "",
//			text: "",
//			innerHTML : tl2, //"I love<br><br>" + storyData.somewhere,
//			direction: "down"
//		});
//		
//		pop.timeline({
//			start : 15,
//			end : 20,
//			target : "title" + storyID,
//			title: "",
//			text: "",
//			innerHTML :tl3, //"I love<br>" + storyData.stuff + "<br>in " + storyData.somewhere,
//			direction: "down"
//		});
//
		pop.timeline({
			start : 20,
			end : 30,
			target : "title" + storyID,
			title: "",
			text: "",
			innerHTML : tl4, //"I love<br>" + storyData.stuff + "<br>in " + storyData.somewhere + "<br>because<br>" + storyData.reason,
			direction: "down"
		});

		pop.exec(15, function() {
			playSound();

		});
		pop.exec(20, function() {
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

	var play = function() {
//		$(popcornTarget + ' #videoOverlay').removeClass( 'vidPaused' ).addClass( 'vidPlayed' );
	}

	var pause = function() {
//		$(popcornTarget + ' #videoOverlay').removeClass( 'vidPlayed' ).addClass( 'vidPaused' );
	}

	var playPause = function() {

		if (!playing) {
			pop.play();
			playing = true;
		} else {
			pop.pause();
			playing = false;

		}

	}

	var playSound = function() {

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
	
	var getPopcornTarget = function() {
		
		return popcornTarget;
		
	}
	
	var isPlaying = function()
	
	{
		
		return playing;
		
	}
	
	// public members
	return {
		init : init,
		getPopcornTarget : getPopcornTarget,
		isPlaying : isPlaying,
		playPause : playPause
	};

}
