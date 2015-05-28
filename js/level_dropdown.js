
var levelAmount = 0;

var currentLevel = 0;


function createLevelList() {

	levelAmount = getAmountOfLevels();
	var levelList = "";
	var currentLevel = getCurrentLevel();

	for (var i = 1; i <= levelAmount; i++) {
		
		if (i == currentLevel) {
			levelList += '<li style="background: orange;" onclick="getPreviousLevel()">Level ' + i + '</li>';
		}
		else if (i < currentLevel) {
			levelList += '<li style="background: green;" onclick="getPreviousLevel()">Level ' + i + '</li>';
		} else {
			levelList += '<li>Level ' + i + '</li>';
		}
		
	}

	$("#mid-right").html(levelList);
}