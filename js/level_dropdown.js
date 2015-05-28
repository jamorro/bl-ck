
var levelAmount = 0;

function createLevelList() {

	levelAmount = getAmountOfLevels();
	var levelList = "";

	for (var i = 0; i <= levelAmount; i++) {
		levelList += '<li>Level ' + i + '</li>';
	}

	$("#mid-right").html(levelList);
}