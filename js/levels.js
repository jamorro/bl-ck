/*
	0 = WALL
	1 = MOVABLE AREA
	4 = EXIT

	gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
*/
var gameLevelArr;
var playerArr;


var AMOUNT_OF_LEVELS = 10;


function setAmountOfLevels(aLevels) {
	AMOUNT_OF_LEVELS = aLevels;
}

function getAmountOfLevels() {
	return AMOUNT_OF_LEVELS;
}


function getPlayerArray() {
	return playerArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
}

function getLevel(level) {
	console.log(level)
	switch (level) {
		case 1 :
			return level_1();
		case 2 :
			return level_2();
		case 3 :
			return level_3();
		case 4 :
			return level_4();
		case 5 :
			return level_5();
		case 6 : 
			return level_6();
		case 7 :
			return level_7();
		case 8 :
			return level_8();
		case 9 :
			return level_9();
		case 10 :
			return level_10();
	
	}

}
/*
*0 = cannot move here
*1 = can move here free space
*2 = Player position
*3 = block
*4 = exit
*5 = water
*/
function level_1() {
	return gameLevelArr =  
	[
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 4, 5, 1, 1, 1, 3, 1, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 1, 0],
        [0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}


function level_2() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 4, 4, 5, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 4, 4, 5, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
	    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
	    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
	    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0],
	    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 0, 1, 0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 0],
	    [0, 1, 1, 0, 1, 0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 0],
	    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function level_3() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 5, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 0],
	    [0, 4, 4, 5, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 0],
	    [0, 5, 5, 5, 1, 1, 1, 1, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 3, 1, 0, 0, 1, 3, 1, 0, 0, 1, 1, 5, 1, 0],
	    [0, 1, 3, 1, 0, 0, 1, 3, 1, 0, 0, 1, 1, 1, 1, 0],
	    [0, 1, 3, 1, 0, 0, 1, 3, 1, 0, 0, 3, 3, 3, 3, 0],
	    [0, 1, 3, 1, 0, 0, 1, 3, 1, 0, 0, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function level_4() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 1, 1, 1, 0, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 4, 4, 1, 1, 1, 0, 5, 5, 1, 1, 1, 3, 3, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 3, 3, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 3, 3, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 3, 3, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 5, 5, 1, 1, 1, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}


function level_5() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 5, 5, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
	    [0, 4, 4, 5, 5, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
	    [0, 5, 5, 5, 5, 1, 0, 0, 0, 0, 1, 5, 1, 1, 1, 0],
	    [0, 5, 5, 5, 5, 1, 0, 0, 0, 0, 1, 5, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 5, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 1, 5, 1, 1, 1, 0, 0, 0, 5, 3, 1, 1, 0],
	    [0, 1, 3, 1, 5, 1, 1, 1, 0, 0, 0, 5, 3, 1, 1, 0],
	    [0, 1, 1, 1, 5, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
	    [0, 1, 3, 1, 5, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
	    [0, 1, 1, 1, 5, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function level_6() {
	return gameLevelArr =  
	[
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0],
	    [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 3, 3, 0],
	    [0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0],
	    [0, 5, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
	    [0, 1, 0, 1, 0, 5, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
	    [0, 1, 0, 1, 3, 5, 0, 4, 3, 1, 0, 1, 0, 1, 1, 0],
	    [0, 1, 0, 0, 0, 3, 1, 0, 1, 1, 0, 1, 0, 5, 5, 0],
	    [0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0],
	    [0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 0, 3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
	    [0, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function level_7() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 4, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0],
	    [0, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function level_8() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 5, 5, 5, 1, 0, 1, 3, 1, 0, 1, 1, 1, 0],
	    [0, 4, 4, 5, 5, 5, 1, 0, 3, 1, 3, 0, 1, 3, 1, 0],
	    [0, 5, 5, 5, 5, 5, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 5, 5, 5, 5, 5, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	    [0, 5, 5, 5, 5, 5, 1, 1, 1, 1, 5, 5, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 0],
	    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 0, 5, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 3, 1, 0],
	    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 3, 1, 0],
	    [0, 1, 1, 0, 1, 1, 1, 0, 1, 3, 1, 0, 1, 3, 1, 0],
	    [0, 3, 3, 0, 3, 3, 3, 0, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 0, 1, 1, 1, 0, 1, 3, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}


function level_9() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
	    [0, 4, 4, 0, 1, 3, 1, 1, 3, 5, 1, 1, 1, 3, 1, 0],
	    [0, 5, 5, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	    [0, 0, 3, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 1, 0, 1, 3, 5, 3, 5, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 1, 0, 1, 5, 3, 5, 3, 1, 0, 0, 5, 0, 0],
	    [0, 0, 5, 0, 0, 1, 3, 5, 3, 5, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
	    [0, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
	    [0, 5, 5, 5, 1, 3, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
	    [0, 5, 5, 5, 1, 1, 5, 1, 3, 1, 1, 5, 1, 1, 1, 0],
	    [0, 5, 5, 5, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function level_10() {
	return gameLevelArr =  
	[
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 4, 4, 5, 0, 5, 1, 3, 5, 1, 1, 5, 1, 3, 1, 0],
	    [0, 4, 4, 5, 0, 5, 3, 1, 5, 3, 1, 5, 3, 1, 5, 0],
	    [0, 5, 5, 5, 0, 5, 1, 3, 5, 1, 3, 5, 1, 5, 1, 0],
	    [0, 1, 5, 1, 0, 5, 3, 1, 5, 1, 1, 5, 3, 1, 3, 0],
	    [0, 5, 1, 5, 0, 5, 1, 3, 5, 0, 0, 5, 1, 3, 1, 0],
	    [0, 1, 5, 1, 0, 5, 3, 1, 5, 0, 0, 5, 5, 1, 3, 0],
	    [0, 5, 1, 5, 0, 5, 1, 3, 5, 0, 0, 5, 1, 3, 1, 0],
	    [0, 1, 5, 1, 0, 5, 3, 1, 5, 0, 0, 5, 3, 1, 3, 0],
	    [0, 5, 1, 5, 0, 5, 1, 3, 5, 0, 0, 5, 1, 5, 1, 0],
	    [0, 1, 5, 1, 0, 5, 3, 1, 5, 0, 0, 5, 3, 1, 3, 0],
	    [0, 5, 1, 5, 1, 5, 1, 3, 5, 0, 0, 5, 1, 3, 1, 0],
	    [0, 1, 1, 1, 0, 5, 3, 1, 5, 0, 0, 5, 3, 1, 3, 0],
	    [0, 1, 1, 1, 1, 5, 1, 3, 5, 0, 0, 5, 1, 1, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}



/*
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
*/
