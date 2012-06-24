$(document).ready(function() {
	
	$('#template-blank').click(function () {
        document.getElementById("template-current").innerHTML = "<a href='rules.html'>Blank Template</a>";
        document.getElementById("template-blank").innerHTML = "[selected] NEW "; 
        document.getElementById("template-gta").innerHTML = "GTA";
        document.getElementById("template-pacman").innerHTML = "Pacman";
        template = 0;
    });
    
    $('#template-gta').click(function () {
        document.getElementById("template-current").innerHTML = "<a href='custom.html'>GTA</a>";    
        document.getElementById("template-gta").innerHTML = "[selected] GTA";    
        document.getElementById("template-blank").innerHTML = "NEW";
        document.getElementById("template-pacman").innerHTML = "Pacman";        
        template = 2;
    });
    
    $('#template-pacman').click(function () {
        document.getElementById("template-current").innerHTML = "<a href='custom.html'>Pacman</a>";        
        document.getElementById("template-pacman").innerHTML = "[selected] Pacman";
        document.getElementById("template-blank").innerHTML = "NEW";
        document.getElementById("template-gta").innerHTML = "GTA";
        template = 1;
    });
    
    
        
});