/*
	LEVELS in levels.js
*/

var CURRENT_LEVEL = 0;
var new_level_check = false;
var reset_level_check = false;

function getCurrentLevel() {
	return CURRENT_LEVEL;
}

function getNewLevel() {
    return new_level_check;
}

function setNewLevel(val) {
    new_level_check = val;
}

//Button in index.html
function activateNextLevel() {
    if (getAmountOfLevels() !== CURRENT_LEVEL) {
        CURRENT_LEVEL++;
        levelHandler(CURRENT_LEVEL);
    }
}

function getResetLevel() {
	return reset_level_check;
}

function setResetLevel(val) {
	reset_level_check = val;
}

//Button in index.html
function activateResetLevel() {
    levelHandler(CURRENT_LEVEL);
}

function getNextLevel() {
	CURRENT_LEVEL++;
	return getLevel(CURRENT_LEVEL);
}

function getPreviousLevel() {
    if (CURRENT_LEVEL > 1) {
        CURRENT_LEVEL--;
        levelHandler(CURRENT_LEVEL);

    }
}

function resetLevel() {
	alert(CURRENT_LEVEL)
	return getLevel(CURRENT_LEVEL);
}