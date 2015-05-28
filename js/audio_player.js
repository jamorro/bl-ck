var SOUND_ON_OR_OFF = true;

function playBackgroundMusic() {
    var backGroundSound = document.getElementById("audio-player");
    backGroundSound.play();
}

function muteSound() {
    document.getElementById("audio-player").volume = 0;

}

function unMuteSound() {
    document.getElementById("audio-player").volume = 1;
}

function playDinoEatingSound() {
	var dinoRoar = document.getElementById("audio-dino-eating");
	dinoRoar.play();
}



$(document).ready(function(){
	$("#menu-sound").click(function() {
		if (SOUND_ON_OR_OFF === true) {
			muteSound();
			SOUND_ON_OR_OFF = false;
			$("#menu-sound").html("Unmute Sound");
		} else {
			unMuteSound();
			SOUND_ON_OR_OFF = true;
			$("#menu-sound").html("Mute Sound");
		}
	});
});