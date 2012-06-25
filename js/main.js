window.onload = function() {
	
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
		  
		  
		});
	
	$('#stories').isotope({
		  // options
		  itemSelector : '.story',
		  layoutMode : 'fitRows'
//		  masonry: {
//		    columnWidth: 2000
//		  }
		});


	
	
}
