var ifeel;
var stuff;
var place;
var reason;
var vid;

$(document).ready(function() {			
	
	$('input').focus( function() {
		
		if( this.id == "formFeel" || this.id == "formFeel2" ) {
		}
		else {
			$(this).attr( "placeholder", "" );
		}
		
		var i = 0;

		if( ifeel != "" ) {
			i++;
		}
		if( stuff != "" ) {
			i++;
		}
		if( place != "" ) {
			i++;
		}
		if( reason != "" ) {
			i++;
		}
		if( vid != "" ) {
			i++;
		}
		
		console.log( "this.value == " + this.value + " and i == " + i );
		
		if( this.value == "" && i == 4 ) {
			$('#previewBtn').removeClass( 'inactive' );
			$('#previewBtn').attr("href", "javascript:saveForm()");
		}
		
	});
	
	$('input').blur( function() {
						
		ifeel = document.getElementById( 'formFeel' ).value;
		stuff = document.getElementById( 'formStuff' ).value;
		place = document.getElementById( 'formPlace' ).value;
		reason = document.getElementById( 'formReason' ).value;
		vid = document.getElementById( 'formVid' ).value;

		console.log( "ifeel = " + ifeel + " stuff = " + stuff + " place = " + place + " reason = " + reason + " vid = " + vid );		
		
		if( ifeel == "" ) {
			document.getElementById( 'formFeel' ).style.backgroundColor = "rgba(255,255,255,0.2)";
			document.getElementById( 'formFeel2' ).style.backgroundColor = "rgba(255,255,255,0.2)";
			$('#imgFeel').attr( "src", "./img/neutral_heart_placeholder.png" );
			$('#imgFeel2').attr( "src", "./img/neutral_heart_placeholder.png" );
		}
		else if( ifeel != "" ) {
			document.getElementById( 'formFeel' ).style.backgroundColor = "rgba(0,0,0,1)";			
			document.getElementById( 'formFeel2' ).style.backgroundColor = "rgba(0,0,0,1)";			
			if( ifeel == "i love" ) {
				$('#imgFeel').attr( "src", "./img/love_heart_filled.png" );
				$('#imgFeel2').attr( "src", "./img/love_heart_filled.png" );
			}
			else if( ifeel == "" ) {
				$('#imgFeel').attr( "src", "./img/neutral_heart_placeholder.png" );
				$('#imgFeel2').attr( "src", "./img/neutral_heart_placeholder.png" );
			}
			else {
				$('#imgFeel').attr( "src", "./img/hate_heart_filled.png" );
				$('#imgFeel2').attr( "src", "./img/hate_heart_filled.png" );
			}
		}
		
		if( stuff == "" ) {
			document.getElementById( 'formStuff' ).style.backgroundColor = "rgba(255,255,255,0.2)";
			if( ifeel == "i love" ) {
				$('#imgStuff').attr( "src", "./img/love_stuff_placeholder.png" );
			}
			else if( ifeel == "" ) {
				$('#imgStuff').attr( "src", "./img/neutral_stuff_placeholder.png" );
			}
			else {
				$('#imgStuff').attr( "src", "./img/hate_stuff_placeholder.png" );
			}
		}
		else {
			document.getElementById( 'formStuff' ).style.backgroundColor = "rgba(0,0,0,1)";			
			if( ifeel == "i love" ) {
				$('#imgStuff').attr( "src", "./img/love_stuff_filled.png" );
			}
			else if( ifeel == "" ) {
				$('#imgStuff').attr( "src", "./img/neutral_stuff_filled.png" );
			}
			else {
				$('#imgStuff').attr( "src", "./img/hate_stuff_filled.png" );
			}
		}
		
		if( place == "" ) {
			document.getElementById( 'formPlace' ).style.backgroundColor = "rgba(255,255,255,0.2)";
			if( ifeel == "i love" ) {
				$('#imgPlace').attr( "src", "./img/love_place_placeholder.png" );
			}
			else if( ifeel == "" ) {
				$('#imgPlace').attr( "src", "./img/neutral_place_placeholder.png" );
			}
			else {
				$('#imgPlace').attr( "src", "./img/hate_place_placeholder.png" );
			}
		}
		else {
			document.getElementById( 'formPlace' ).style.backgroundColor = "rgba(0,0,0,1)";			
			if( ifeel == "i love" ) {
				$('#imgPlace').attr( "src", "./img/love_place_filled.png" );
			}
			else if( ifeel == "" ) {
				$('#imgPlace').attr( "src", "./img/neutral_place_filled.png" );
			}
			else {
				$('#imgPlace').attr( "src", "./img/hate_place_filled.png" );
			}
		}
		
		if( reason == "" ) {
			document.getElementById( 'formReason' ).style.backgroundColor = "rgba(255,255,255,0.2)";
			if( ifeel == "i love" ) {
				$('#imgReason').attr( "src", "./img/love_reason_placeholder.png" );
			}
			else if( ifeel == "" ) {
				$('#imgReason').attr( "src", "./img/neutral_reason_placeholder.png" );
			}
			else {
				$('#imgReason').attr( "src", "./img/hate_reason_placeholder.png" );
			}
		}
		else {
			document.getElementById( 'formReason' ).style.backgroundColor = "rgba(0,0,0,1)";	
			if( ifeel == "i love" ) {
				$('#imgReason').attr( "src", "./img/love_reason_filled.png" );
			}
			else if( ifeel == "" ) {
				$('#imgReason').attr( "src", "./img/neutral_reason_filled.png" );
			}
			else {
				$('#imgReason').attr( "src", "./img/hate_reason_filled.png" );
			}		
		}
		
		if( vid == "" ) {
			document.getElementById( 'formVid' ).style.backgroundColor = "rgba(255,255,255,0.2)";
			if( ifeel == "i love" ) {
				$('#imgVid').attr( "src", "./img/love_vid_placeholder.png" );
			}
			else if( ifeel == "" ) {
				$('#imgVid').attr( "src", "./img/neutral_vid_placeholder.png" );
			}
			else {
				$('#imgVid').attr( "src", "./img/hate_vid_placeholder.png" );
			}
		}
		else {
			document.getElementById( 'formVid' ).style.backgroundColor = "rgba(0,0,0,1)";			
			if( ifeel == "i love" ) {
				$('#imgVid').attr( "src", "./img/love_vid_filled.png" );
			}
			else if( ifeel == "" ) {
				$('#imgVid').attr( "src", "./img/neutral_vid_filled.png" );
			}
			else {
				$('#imgVid').attr( "src", "./img/hate_vid_filled.png" );
			}
		}
		
		console.log( "blur id == " + this.id );
		
		if( this.value == "" ) {
			$('#previewBtn').addClass( 'inactive' );
			$("#previewBtn").attr("href", "#");
		}
		
		if( this.id == "formStuff" || this.id == "formReason" ) {
			$('#' + this.id).attr( "placeholder", "SOMETHING..." );
		}
		else if( this.id == "formPlace" ) {
			$('#' + this.id).attr( "placeholder", "SOMEWHERE..." );
		}
		else if( this.id == "formVid" ) {
			$('#' + this.id).attr( "placeholder", "30S VIDEO URL" );	
		}
		else if( this.id == "formFeel" || this.id == "formFeel2" ) {
			$('#formFeel').attr( "placeholder", "I LOVE/IF ONLY" );
			$('#formFeel2').attr( "placeholder", "BECAUSE/THEN" );
		}
		
	});
});


function openDrawer() {
	document.getElementById( "instructionspace" ).style.visibility = "visible";
	document.getElementById( "ruledrawer" ).style.visibility = "visible";
}

function shutDrawer() {
	document.getElementById( "ruledrawer" ).style.visibility = "hidden";
//	document.getElementById( 'previewBtn' ).style.visibility = "hidden";
	$('#previewBtn').addClass( 'inactive' );
	$("#previewBtn").attr("href", "#");
//	$('#previewBtn').attr("onclick", "");
	document.getElementById( 'formFeel' ).value = "";
	document.getElementById( 'formStuff' ).value = "";
	document.getElementById( 'formPlace' ).value = "";
	document.getElementById( 'formFeel2' ).value = "";
	document.getElementById( 'formReason' ).value = "";
	document.getElementById( 'formVid' ).value = "";	
	document.getElementById( 'formFeel' ).style.backgroundColor = "rgba(255,255,255,0.2)";
	document.getElementById( 'formStuff' ).style.backgroundColor = "rgba(255,255,255,0.2)";
	document.getElementById( 'formPlace' ).style.backgroundColor = "rgba(255,255,255,0.2)";
	document.getElementById( 'formFeel2' ).style.backgroundColor = "rgba(255,255,255,0.2)";
	document.getElementById( 'formReason' ).style.backgroundColor = "rgba(255,255,255,0.2)";
	document.getElementById( 'formVid' ).style.backgroundColor = "rgba(255,255,255,0.2)";
	document.getElementById( 'formspace' ).style.borderTopColor = '#fff';
	document.getElementById( 'formFeel' ).style.color = "#171717";
	document.getElementById( 'formFeel2' ).style.color = "#171717";
	$('#imgFeel').attr( "src", "./img/neutral_heart_placeholder.png" );
	$('#imgStuff').attr( "src", "./img/neutral_stuff_placeholder.png" );
	$('#imgPlace').attr( "src", "./img/neutral_place_placeholder.png" );
	$('#imgFeel2').attr( "src", "./img/neutral_heart_placeholder.png" );
	$('#imgReason').attr( "src", "./img/neutral_reason_placeholder.png" );
	$('#imgVid').attr( "src", "./img/neutral_vid_placeholder.png" );
	$('.mainform').css( "border", "1px solid #FFFFFF" );
}

function feelChange() {
	document.getElementById( 'formFeel' ).style.color = "#fff";
	document.getElementById( 'formFeel2' ).style.color = "#fff";
	document.getElementById( 'formFeel' ).style.backgroundColor = "rgba(0,0,0,1)";			
	document.getElementById( 'formFeel2' ).style.backgroundColor = "rgba(0,0,0,1)";			
	var tmp = document.getElementById( 'formFeel' ).value;
	if( tmp == "if only" || tmp == "" ) {
		document.getElementById( 'formFeel' ).value = "i love";	
		document.getElementById( 'formFeel2' ).value = "because";	
		document.getElementById( 'formspace' ).style.borderTopColor = '#ED1E79';
		$('#imgFeel').attr( "src", "./img/love_heart_filled.png" );
		$('#imgFeel2').attr( "src", "./img/love_heart_filled.png" );
		if( document.getElementById( 'formStuff' ).value == "" ) {
			$('#imgStuff').attr( "src", "./img/love_stuff_placeholder.png" );
		}		
		else {
			$('#imgStuff').attr( "src", "./img/love_stuff_filled.png" );
		}
		if( document.getElementById( 'formPlace' ).value == "" ) {
			$('#imgPlace').attr( "src", "./img/love_place_placeholder.png" );
		}		
		else {
			$('#imgPlace').attr( "src", "./img/love_place_filled.png" );
		}
		if( document.getElementById( 'formReason' ).value == "" ) {
			$('#imgReason').attr( "src", "./img/love_reason_placeholder.png" );
		}		
		else {
			$('#imgReason').attr( "src", "./img/love_reason_filled.png" );
		}
		if( document.getElementById( 'formVid' ).value == "" ) {
			$('#imgVid').attr( "src", "./img/love_vid_placeholder.png" );
		}		
		else {
			$('#imgVid').attr( "src", "./img/love_vid_filled.png" );
		}
		$('.mainform').css( "border", "1px solid #ED1E79" );
	}
	else if( tmp == "i love" ) {
		document.getElementById( 'formFeel' ).value = "if only";	
		document.getElementById( 'formFeel2' ).value = "then";	
		document.getElementById( 'formspace' ).style.borderTopColor = '#ffff00';
		$('#imgFeel').attr( "src", "./img/hate_heart_filled.png" );
		$('#imgFeel2').attr( "src", "./img/hate_heart_filled.png" );
		if( document.getElementById( 'formStuff' ).value == "" ) {
			$('#imgStuff').attr( "src", "./img/hate_stuff_placeholder.png" );
		}		
		else {
			$('#imgStuff').attr( "src", "./img/hate_stuff_filled.png" );
		}
		if( document.getElementById( 'formPlace' ).value == "" ) {
			$('#imgPlace').attr( "src", "./img/hate_place_placeholder.png" );
		}		
		else {
			$('#imgPlace').attr( "src", "./img/hate_place_filled.png" );
		}
		if( document.getElementById( 'formReason' ).value == "" ) {
			$('#imgReason').attr( "src", "./img/hate_reason_placeholder.png" );
		}		
		else {
			$('#imgReason').attr( "src", "./img/hate_reason_filled.png" );
		}
		if( document.getElementById( 'formVid' ).value == "" ) {
			$('#imgVid').attr( "src", "./img/hate_vid_placeholder.png" );
		}		
		else {
			$('#imgVid').attr( "src", "./img/hate_vid_filled.png" );
		}
		$('.mainform').css( "border", "1px solid #FFFF00" );		
	}
	$('#formFeel').wiggle('start', {limit: 4});
	$('#formFeel2').wiggle('start', {limit: 4});
	$('#imgFeel').wiggle('start', {limit: 4});
	$('#imgFeel2').wiggle('start', {limit: 4});
	
	console.log( "i say..." + document.getElementById( 'formFeel' ).value );
}

function saveForm() {
	
	if( ifeel == "" || stuff == "" || place == "" || reason == "" || vid == "" ) {
		return false;
	}
	
	var feel = 0;
	
	if( ifeel == "if only" ) {
		feel = 0;
	}
	else if( ifeel == "i love" ) {
		feel = 1;
	}
	
	if( vid.match(/^http:\/\/player.vimeo.com\/video\/([0-9]+)/) || vid.match(/^http:\/\/www.youtube.com/) ) {
		console.log( "vid is go!" );
	}
	else if( vid.match( /vimeo/ ) ) {
		console.log( "vid link needs editing" );
		vid = vid.replace( /^(https|http):\/\/vimeo.com/g, 'http://player.vimeo.com/video' );				
	}	
	else if( vid == "" ) {
		console.log( "error...video field blank!" );
		return false;
	}
	else {
		console.log( "boo! vid link fail!" );
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
			   
	shutDrawer();
}

function fadeInstructions() {
	$( '#instructionspace' ).fadeTo('slow', 0, function() {
		document.getElementById( "instructionspace" ).style.visibility = "hidden";
    	$( '#instructionspace' ).css('opacity', 1);
    });
}


