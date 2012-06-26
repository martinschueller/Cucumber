$(document).ready(function() {
			
});


function openDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "visible";
}

function shutDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "hidden";
}

function feelChange() {
	document.getElementById( 'formFeel' ).style.color = "#fff";
	var tmp = document.getElementById( 'formFeel' ).value;
	if( tmp == "hate" ) {
		document.getElementById( 'formFeel' ).value = "love";	
		document.getElementById( 'formspace' ).style.borderTopColor = '#ED1E79';
	}
	else if( tmp == "love" ) {
		document.getElementById( 'formFeel' ).value = "hate";	
		document.getElementById( 'formspace' ).style.borderTopColor = '#ffff00';
	}
	$('#formFeel').wiggle('start', {limit: 4});
	
	console.log( "i feel..." + document.getElementById( 'formFeel' ).value );
}

function saveForm() {
	
	var ifeel = document.getElementById( 'formFeel' ).value;
	var stuff = document.getElementById( 'formStuff' ).value;
	var place = document.getElementById( 'formPlace' ).value;
	var reason = document.getElementById( 'formReason' ).value;
	var vid = document.getElementById( 'formVid' ).value;
	
	var feel = 0;
	
	if( ifeel == "" || stuff == "" || place == "" || reason == "" || vid == "" ) {
		return false;
	}
	
	if( ifeel == "hate" ) {
		feel = 0;
	}
	else if( ifeel == "love" ) {
		feel = 1;
	}
	
	if( vid.match(/^http:\/\/player.vimeo.com\/video\/([0-9]+)/) || vid.match(/^http:\/\/www.youtube.com/) ) {
		console.log( "vid is go!" );
	}
	else if( vid.match( /vimeo/ ) ) {
		console.log( "boo! vid format fail!" );
		vid = vid.replace( /^(https|http):\/\/vimeo.com/g, 'http://player.vimeo.com/video' );
				
	}	
	else {
		console.log( "error...no video!" );
		return false;
	}


	console.log( "feel = " + feel + " stuff = " + stuff + " place = " + place + " reason = " + reason + " vid = " + vid );

//	$.ajax( {
//		type: "POST",
//		url: "http://cucumber.iaep.de/snacks",
//		data: {"data":{
//			"hate":feel,
//			"stuff":stuff,
//			"somewhere":place,
//			"video_link":vid
//		}}
////		add snack: POST http://cucumber.iaep.de/snacks data={"hate":"0","stuff":"boats","somewhere":"in mumbai","video_link":"blaa"}
////		get snacks: GET http://cucumber.iaep.de/snacks
//	
//	})
	
	$.post("http://cucumber.iaep.de/snacks", "data=" + JSON.stringify({"hate":feel,"stuff":stuff,"somewhere":place,"video_link":vid, "reason":reason}),
			   function(data) {
			     //alert("Data Loaded: " + data);
			   });	
}


