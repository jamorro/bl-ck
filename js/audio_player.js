var SOUND_ON_OR_OFF = true;

function playBackgroundMusic() {
    var backGroundSound = document.getElementById("audio-player");
    backGroundSound.play();
}

function muteSound() {

    if (SOUND_ON_OR_OFF === true) {
		document.getElementById("audio-player").volume = 0;
		document.getElementById("audio-dino-eating").volume = 0;
		SOUND_ON_OR_OFF = false;
		$("#menu-sound").html("Unmute Sound");
	} else {
		document.getElementById("audio-player").volume = 1;
		document.getElementById("audio-dino-eating").volume = 1;
		SOUND_ON_OR_OFF = true;
		$("#menu-sound").html("Mute Sound");
	}
}

function playDinoEatingSound() {
	var dinoRoar = document.getElementById("audio-dino-eating");
	dinoRoar.play();
}

$(document).ready(function(){
	$("#menu-sound").click(function() {
		muteSound();
	});
});