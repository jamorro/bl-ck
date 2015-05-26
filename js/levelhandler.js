/*
	LEVELS in levels.js
*/

var CURRENT_LEVEL = 0;
var new_level_check = false;
var reset_level_check = false;

function getNewLevel() {
    return new_level_check;
}

function setNewLevel(val) {
    new_level_check = val;
}

//Button in index.html
function activateNextLevel() {
    setNewLevel(true);
}

function getResetLevel() {
	return reset_level_check;
}

function setResetLevel(val) {
	reset_level_check = val;
}

//Button in index.html
function activateResetLevel() {
	setResetLevel(true);
}

function getNextLevel() {
	CURRENT_LEVEL++;
	return getLevel(CURRENT_LEVEL);
}

function getPreviousLevel() {
	CURRENT_LEVEL--;
	return getLevel(CURRENT_LEVEL);
}

function resetLevel() {
	alert(CURRENT_LEVEL)
	return getLevel(CURRENT_LEVEL);
}