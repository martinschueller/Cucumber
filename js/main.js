var numberOfStories;
var view = "";
var gridRowHeight = 230;
var gridColumnWidth = 370;

document.addEventListener("DOMContentLoaded", function(){
	
	$.getJSON('http://cucumber.iaep.de/snacks', function(data) {
		
			console.log('this is the json data: ' + data);
		  var items = [];
		  
		  $.each(data, function(key, val) {
			  console.log('key: ' + key);
			  console.log('val: ' + val.data.video_link);
			var story = new Story();
			story.init("#stories", val, key);
		    items.push(story);

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