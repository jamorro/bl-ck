// Create the canvas
/*
var canvas = document.createElement("canvas");
var canvas2 = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
canvas.width = 512;
canvas.height = 480;
canvas.style.zIndex = 1;
canvas2.width = 512;
canvas2.height = 480;
canvas2.style.zIndex =2;*/
var layer1;
var layer2;
var layer3;
var ctx1;
var ctx2;
var ctx3;
layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
layer3 = document.getElementById("layer3");
ctx3 = layer3.getContext("2d");
//15*16
// Background image
var bgReady = false;
var walls = new Image();
walls.src = "images/wall.png";
var bgImage = new Image();

var bgArray = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
/*
*0 = cannot move here
*1 = can move here free space
*2 = Player position
*3 = block
*4 = exit
*/
var gameArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

bgImage.onload = function () {
    drawmap();
}

bgImage.src = "images/Tile.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};

heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/block.png";

// Game objects
var hero = {
	speed: 32 // movement in pixels per second
};
var monster = {};

// Handle keyboard controls
var fired = false;
var keysDown = [];

addEventListener("keydown", function (e) {
    if (!fired && keysDown.length === 0){
        keysDown[e.keyCode] = true;
        fired = true;
        update();
    };
    
}, false);

addEventListener("keyup", function (e) {
        fired = false;
        keysDown = [];

}, false);

// Reset the game when the player catches a monster
var Initiate = function () {
    var x = 0;
    var y = 0;
    var b = 0;
    for (i = 0; i < bgArray.length; i++) {

        for (c = 0; c < gameArray[b].length; c++) {
            var object = gameArray[b];
            if (object[c] === 2) {
                hero.x = x;
                hero.y = y;

            }
            if (object[c] === 3){
                monster.x = x;
                monster.y = y;
            }
            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
    
};

// Update game objects
var update = function (speed) {
    //console.log(monster.y, hero.y)

    if (38 in keysDown && hero.y > 0 && collision(monster, hero) != true) { // Player holding up
        ctx2.clearRect(hero.y, hero.x, 32, 32);
        hero.y -= hero.speed;   
    }
    if (40 in keysDown && hero.y < 450 && collision(monster, hero) != true) { // Player holding down
        ctx2.clearRect(hero.y, hero.x, 32, 32);
        hero.y += hero.speed;
    }
    if (37 in keysDown && hero.x > 0 && collision(monster, hero) != true) { // Player holding left
        ctx2.clearRect(hero.y, hero.x, 32, 32);
        hero.x -= hero.speed;
    }
    if (39 in keysDown && hero.x < 480 && collision(monster, hero) != true) { // Player holding right
        ctx2.clearRect(hero.y, hero.x, 32, 32);
        hero.x += hero.speed;
    }
    
    // Are they touching?
    
	canhaztouch(monster, hero, keysDown);
};
var moves = function () {
}

/*

*/
var canhaztouch = function (monster, hero, keysDown) {
    if (collision(hero, monster)) {
        if (38 in keysDown && monster.y > 0) { // Player holding up
            monster.y -= hero.speed;
        }
        if (40 in keysDown && monster.y < 450) { // Player holding down
            monster.y += hero.speed;
        }
        if (37 in keysDown && monster.x > 0) { // Player holding left
            monster.x -= hero.speed;
        }
        if (39 in keysDown && monster.x < 480) { // Player holding right
            monster.x += hero.speed;
        }
    }
};
var canhazmove = function (modelA, modelB, keysDown) {
    

};


var collision = function (modelA, modelB) {
    if (modelA.x <= (modelB.x + 32)
        && modelB.x <= (modelA.x + 32)
        && modelA.y <= (modelB.y + 32)
        && modelB.y <= (modelA.y + 32)) {
        return true;
    }
}
drawmap = function () {
    
    var x = 0;
    var y = 0;
    var b = 0;

    for (i = 0; i < bgArray.length; i++) {

        for (c = 0; c < bgArray[b].length; c++) {
            var object = bgArray[b];
            if (object[c] === 1) {
                ctx1.drawImage(bgImage, x, y);
                
            }
            if (object[c] === 0) {
                ctx1.drawImage(walls, x, y);
            }
            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
}

// Draw everything
var render = function () {

	if (heroReady) {
	    ctx2.clearRect(0, 0,512,480);
	    ctx2.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx2.drawImage(monsterImage, monster.x, monster.y);
	}

};

// The main game loop
var main = function () {

	render();


	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
Initiate();
main();
