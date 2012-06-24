window.onload = function() {
	
	$.getJSON('http://cucumber.iaep.de/snacks', function(data) {
		
			console.log('this is the json data: ' + data);
		  var items = [];

		  $.each(data, function(key, val) {
			  console.log('key: ' + key);
			  console.log('val: ' + val);
			var story = new Story();
			story.init("#stories", "http://player.vimeo.com/video/44562315", key);
		    items.push(story);
		  });
		  
		  
		});
	
	
	
}
