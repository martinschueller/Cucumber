var numberOfStories;
var view = "";
<<<<<<< HEAD
var gridRowHeight;// = 230;
var gridColumnWidth;// = 370;
var gridColumns = 4;
var showingStory = 0;
var storyArray = new Array();

$(document).ready(function() {	
	
	// set grid videos to fit exactly 4 in the browser window
	gridColumnWidth = ( parseInt( window.innerWidth ) - 50 ) / gridColumns;
	gridRowHeight = gridColumnWidth * 230/370;
	
	
	
	$("#navnext").hover(
		function () {
			var i = showingStory + 1;
			if( i == numberOfStories ) {
				i = 0;
			}
			var nextPlace = storyArray[i].somewhere;
			
			if( nextPlace.toLowerCase() != storyArray[showingStory].somewhere.toLowerCase() ) {
		    	$("#navnext").html(nextPlace + ' <a href="javascript:nextStory()"><img src="./img/next.png" border="0"></a>');
			}
	  	},
	  	function () {
	    	$("#navnext").html('<a href="javascript:nextStory()"><img src="./img/next.png" border="0"></a>');
	  	}
	);
	
	$("#navprev").hover(
	  	function () {
	  		var i = showingStory - 1;
	  		if( showingStory == 0 ) {
	  			i = numberOfStories - 1;
	  		}
			var prevPlace = storyArray[i].somewhere;
	  	
	  		if( prevPlace.toLowerCase() != storyArray[showingStory].somewhere.toLowerCase() ) {
		    	$("#navprev").html('<a href="javascript:prevStory()"><img src="./img/prev.png" border="0"></a> ' + prevPlace);
	  		}
	  	},
	  	function () {
	    	$("#navprev").html('<a href="javascript:prevStory()"><img src="./img/prev.png" border="0"></a>');
	  	}
	);
	
	$(document).keydown(function(e){
		if( view == "single" ) {
		    if (e.keyCode == 37) { 	// left arrow key
		       prevStory();
		       return false;
		    }
		    else if(e.keyCode == 39) {	// right arrow key
		    	nextStory();
		    	return false;
		    }
		}
	});

	// hover image code
	$(".imgHoverable").hover( function() {
       var hoverImg = HoverImgOf($(this).attr("src"));
       $(this).attr("src", hoverImg);
     }, function() {
       var normalImg = NormalImgOf($(this).attr("src"));
       $(this).attr("src", normalImg);
     }
   );
	
});

=======
var gridRowHeight = 230;
var gridColumnWidth = 370;

>>>>>>> 54850d48e11e188374fbc40c0ca3aae583d1fae8
document.addEventListener("DOMContentLoaded", function(){
	
	$.getJSON('http://cucumber.iaep.de/snacks', function(data) {
		
			console.log('this is the json data: ' + data);
		  var items = [];
		  
		  $.each(data, function(key, val) {
			  console.log('val: ' + val);
			  //console.log('val: ' + val.data.video_link);
			var story = new Story();
			story.init("#stories", val, key);
			
			storyArray[key] = val;
			
		    items.push(story);
<<<<<<< HEAD
		    
//			$(story.popcornTarget + ' #videoOverlay').hover(function() {
//				// pop.play();
//				$(story.popcornTarget + ' #videoOverlay').css("opacity", "0.0");
//
//			}, function() {
//				// pop.pause();
//				if (!story.playing) {
//					$(story.popcornTarget + ' #videoOverlay').css("opacity", "0.7");
//				}
//
//			});
		    console.log("the popcornj target: " + story.getPopcornTarget());
			$(story.getPopcornTarget() + ' #videoOverlay').click(
					function()
					{
						console.log("storyclicked");
						showStory(key);
						story.playPause();
					});
		    
=======
>>>>>>> 54850d48e11e188374fbc40c0ca3aae583d1fae8

		  });
		    
		  numberOfStories = data.length;
		  layoutChange();
		});
	
	$('#stories').isotope({
		  // options
		  itemSelector : '.story',
		  layoutMode : 'fitRows'
//		  masonry: {
//		  columnWidth: 2000
//		  }
		});
	
});

$(window).resize(function() {
	  $('.single .story').css("height", $(window).height());
	  $('.single .story').css("width", $(window).width());
	});


function layoutChange() {
	
	if(view == "grid") {
		view = "single";		
	}
	else {		
		view = "grid";
	}
	
	
	switch(view)
	{
		case "single":
			showSingle();
			break;
			
		case "grid":
			showGrid();
			break;
			
		default:
			showGrid();
	}
	

	
	//console.log( "#stories single = " + $('#stories').hasClass( 'single' ) + " grid = " + $('#stories').hasClass( 'grid' ) );
	
}

function toggleStar() {
	
	if( $('#imgStar').attr( 'src' ) == "./img/star_empty.png" || $('#imgStar').attr( 'src' ) == "./img/star_empty_hover.png" ) {
		$('#imgStar').attr( 'src', './img/star.png' );
	}
	else if( $('#imgStar').attr( 'src' ) == "./img/star.png" || $('#imgStar').attr( 'src' ) == "./img/star_hover.png" ) {
		$('#imgStar').attr( 'src', './img/star_empty.png' );
	}
	
}


function showStory(storyID)
{
	$('#stories').css('left', -$(window).width() * (storyID) );
	showSingle();
	showingStory = storyID;
	view = "single";
		
}

function showSingle()
{
	$('#stories').removeClass( 'grid isotope' ).addClass( 'single' );
	$('.single#navbar').show();
	$('.grid#navbar').hide();
    $('.single .story').css("height", $(window).height());
    $('.single .story').css("width", $(window).width());
    $('.single#stories').css("height", $(window).height());
    $('.single#stories').css("width", numberOfStories*$(window).width());
    $('.story .storytitle').show();
    
    // make sure all iframes are set to width and height 100% to account for weird vimeo embed code
	$('iframe').css('height', '100%');
	$('iframe').css('width', '100%');
//    $('.single#videoOverlay').addClass( 'vidPaused' );

    
}

function showGrid()
{
	$('#stories').css('left', '0px');
	$('#stories').removeClass( 'single' ).addClass( 'grid isotope' );
	$('.single#navbar').hide();
	$('.grid#navbar').show();
    $('.grid .story').css("height", gridRowHeight);
    $('.grid .story').css("width", gridColumnWidth);
    $('.grid#stories').css("height", "100%");
    $('.grid#stories').css("width", "100%");
    
    // hide the popcorn stuff in grid view
    $('.story .storytitle').hide();        
    
}

function nextStory()
{
	if(showingStory < numberOfStories -1){
		$('#stories').animate({
		    left: '-=' + $(window).width(),
		  }, 100, function() {
		    // Animation complete.
		  });
		showingStory++;
	}
	
	else
		{
			$('#stories').animate({
			    left: '0',
			  }, 100, function() {
			    // Animation complete.
			  });
			showingStory = 0;
		}
	
	//alert(showingStory);
	
});

$(window).resize(function() {
	  $('.single .story').css("height", $(window).height());
	});


function layoutChange() {
	
	if(view == "single") {
		view = "grid";
	}
	else {		
		view = "single";
	}
	
	
	switch(view)
	{
		case "single":
			showSingle();
			break;
			
		case "grid":
			showGrid();
			break;
			
		default:
			showSingle();
	}
	

	
	//console.log( "#stories single = " + $('#stories').hasClass( 'single' ) + " grid = " + $('#stories').hasClass( 'grid' ) );
	
}

<<<<<<< HEAD
function prevStory()
{
	if(showingStory > 0) {		
		$('#stories').animate({
		    left: '+=' + $(window).width(),
		  }, 100, function() {
		    // Animation complete.
		  });
		showingStory--;
	}
	else
		{
		
			$('#stories').animate({
			    left: '-=' + $(window).width() * (numberOfStories - 1),
			  }, 1000, function() {
			    // Animation complete.
			  });
			showingStory = numberOfStories- 1;
		
		}
	
	//alert(showingStory);
}


function fadePopcorn() {
	$( '#popcornspace' ).fadeTo('slow', 0, function() {
		document.getElementById( "popcornspace" ).style.visibility = "hidden";
    	$( '#popcornspace' ).css('opacity', 1);
    });
}

function popcornExplode() {
	document.getElementById( "popcornspace" ).style.visibility = "visible";
}

function HoverImgOf(filename)
{
   var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_hover.$2");
}
function NormalImgOf(filename)
{
   var re = new RegExp("(.+)_hover\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1.$2");
}
=======

function showSingle()
{
	$('#stories').removeClass( 'grid isotope' ).addClass( 'single' );
	$('#navbar').removeClass( 'grid isotope' ).addClass( 'single' );
    $('.single .story').css("height", $(window).height());
    $('.single .story').css("width", $(window).width());
    $('.single#stories').css("height", $(window).height());
    $('.single#stories').css("width", numberOfStories*$(window).width());



}

function showGrid()
{
	$('#stories').removeClass( 'single' ).addClass( 'grid isotope' );
	$('#navbar').removeClass( 'single' ).addClass( 'grid isotope' );
    $('.grid .story').css("height", gridRowHeight);
    $('.grid .story').css("width", gridColumnWidth);
    $('.grid#stories').css("height", "100%");
    $('.grid#stories').css("width", "100%");

	
}

function nextStory()
{
	
}

function prevStory()
{
	
}
>>>>>>> 54850d48e11e188374fbc40c0ca3aae583d1fae8
