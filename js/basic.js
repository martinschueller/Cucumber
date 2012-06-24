$(document).ready(function() {
	
	document.getElementById( "ruledrawer" ).style.height = window.innerHeight + "px";
	document.getElementById( "ruledrawerout" ).style.height = window.innerHeight + "px";	

});


function openDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "visible";
    document.getElementById( "ruledrawerout" ).style.visibility = "hidden";    
}

function shutDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "hidden";
    document.getElementById( "ruledrawerout" ).style.visibility = "visible";    
}


function saveForm() {
	
	var ifeel = document.getElementById( 'formFeel' ).value;
	var stuff = document.getElementById( 'formStuff' ).value;
	var place = document.getElementById( 'formPlace' ).value;
	var reason = document.getElementById( 'formReason' ).value;
	var vid = document.getElementById( 'formVid' ).value;
	
	var feel = 0;
	
	if( ifeel.match(/^h/) ) {
		feel = 0;
	}
	else if( ifeel.match(/^l/) ) {
		feel = 1;
	}
	
	if( vid.match(/^http:\/\/player.vimeo.com\/video\/([0-9]+)/) || vid.match(/^http:\/\/www.youtube.com/) ) {
		console.log( "vid is go!" );
	}
	else {
		console.log( "boo! vid format fail!" );
		vid = vid.replace( /^(https|http):\/\/vimeo.com/g, 'http://player.vimeo.com/video' );
	}	
	console.log( "feel = " + feel + " stuff = " + stuff + " place = " + place + " reason = " + reason + " vid = " + vid );

	$.ajax( {
		type: "POST",
		url: "http://cucumber.iaep.de/snacks",
		data: {
			"hate":feel,
			"stuff":stuff,
			"somewhere":place,
			"video_link":vid
		}
//		add snack: POST http://cucumber.iaep.de/snacks data={"hate":"0","stuff":"boats","somewhere":"in mumbai","video_link":"blaa"}
//		get snacks: GET http://cucumber.iaep.de/snacks
	
	})

}


