var ifeel;
var stuff;
var place;
var reason;
var vid;


$(document).ready(function() {
	$('input').focus( function() {
		console.log( "checkForm() called" );
	
		ifeel = document.getElementById( 'formFeel' ).value;
		stuff = document.getElementById( 'formStuff' ).value;
		place = document.getElementById( 'formPlace' ).value;
		reason = document.getElementById( 'formReason' ).value;
		vid = document.getElementById( 'formVid' ).value;	
		
		console.log( "ifeel = " + ifeel + " stuff = " + stuff + " place = " + place + " reason = " + reason + " vid = " + vid );		
		
		var i = 0;
		if( ifeel != "" ) {
			i++;
			document.getElementById( 'formFeel' ).style.backgroundColor = "rgba(0,0,0,1)";
		}
		if( stuff != "" ) {
			i++;
			document.getElementById( 'formStuff' ).style.backgroundColor = "rgba(0,0,0,1)";
		}
		if( place != "" ) {
			i++;
			document.getElementById( 'formPlace' ).style.backgroundColor = "rgba(0,0,0,1)";
		}
		if( reason != "" ) {
			i++;
			document.getElementById( 'formReason' ).style.backgroundColor = "rgba(0,0,0,1)";
		}
		if( vid != "" ) {
			i++;
			document.getElementById( 'formVid' ).style.backgroundColor = "rgba(0,0,0,1)";
		}
		
		if( i < 4 ) {
			return false;
		}
		
		document.getElementById( 'previewBtn' ).style.visibility = "visible";
	} );		
});


function openDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "visible";
}

function shutDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "hidden";
}

function feelChange() {
	document.getElementById( 'formFeel' ).style.width = "190px";
	document.getElementById( 'formFeel' ).style.color = "#fff";
	var tmp = document.getElementById( 'formFeel' ).value;
	if( tmp == "hate" || tmp == "") {
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
	
	var feel = 0;
	
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


