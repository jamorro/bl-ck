
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
var bgImage = new Image();
var exit = new Image();
var water = new Image();
var boxArray = [];
water.src = "images/water.png";
walls.src = "images/wall.png";
exit.src = "images/exit.png";



var WIDTH = 32;
var HEIGHT = 32;
/*
*0 = cannot move here
*1 = can move here free space
*2 = Player position
*3 = block
*4 = exit
*5 = water
*/
var WALL    = 0;
var MOVABLE = 1;
var PLAYER  = 2;
var BOX     = 3;
var EXIT    = 4;
var WATER   = 5;

var ROWS_LENGTH = 16;
var COL_LENGTH = 15;

var START_ROW_PLAYER;
var START_COL_PLAYER;

var EXIT_ROW = 12;
var EXIT_COL = 12;

var gameArray;
var playerRow;
var playerCol;


//JUST DRAWS OUT THE MAP

var bgArray;

var playerArray;



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
var box = {};

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




function checkUpMovement() {

    if (gameArray[playerRow - 1][playerCol] === EXIT) {
        playerArray[playerRow][playerCol] = 0;
        playerRow--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y -= hero.speed;
        alert("YOU WIN MF");
    }
    
    else if (gameArray[playerRow - 1][playerCol] === BOX) {
        if (gameArray[playerRow - 2][playerCol] !== WALL && gameArray[playerRow - 2][playerCol] !== BOX && gameArray[playerRow - 2][playerCol] !== WATER) {
            gameArray[playerRow - 1][playerCol] = 1;
            //boxRow--;
            gameArray[playerRow - 2][playerCol] = BOX;
            playerArray[playerRow][playerCol] = 0;
            playerRow--;
            playerArray[playerRow][playerCol] = PLAYER;
            box.y -= hero.speed;
            ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
            hero.y -= hero.speed;
        }
        else if (gameArray[playerRow - 2][playerCol] === WATER) {
            gameArray[playerRow - 1][playerCol] = 1;
            //boxCol++;
            gameArray[playerRow - 2][playerCol] = 1;
        }
    } 
    else if (playerRow > 0 && gameArray[playerRow - 1][playerCol] !== WALL ) {
        playerArray[playerRow][playerCol] = 0;
        playerRow--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y -= hero.speed;
    }
}

function checkDownMovement() {
    if (gameArray[playerRow + 1][playerCol] === EXIT) {
        playerArray[playerRow][playerCol] = 0;
        playerRow++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y += hero.speed;
        alert("YOU WIN MF");
    }
    else if (gameArray[playerRow + 1][playerCol] === BOX) {
        if (gameArray[playerRow + 2][playerCol] !== WALL && gameArray[playerRow + 2][playerCol] !== BOX && gameArray[playerRow + 2][playerCol] !== WATER) {
            gameArray[playerRow + 1][playerCol] = 1;
            gameArray[playerRow + 2][playerCol] = BOX;
            playerArray[playerRow][playerCol] = 0;
            playerRow++;
            playerArray[playerRow][playerCol] = PLAYER;
            box.y += hero.speed;
            ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
            hero.y += hero.speed;
        }
        else if (gameArray[playerRow + 2][playerCol] === WATER) {
            gameArray[playerRow + 1][playerCol] = 1;
            //boxCol++;
            gameArray[playerRow + 2][playerCol] = 1;
        }
           
    } 
    else if (playerRow < ROWS_LENGTH && gameArray[playerRow + 1][playerCol] !== WALL ) {
        playerArray[playerRow][playerCol] = 0;
        playerRow++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y += hero.speed;
    }
}

function checkLeftMovement() {
    
    if (gameArray[playerRow][playerCol - 1] === EXIT) {
        playerArray[playerRow][playerCol] = 0;
        playerCol--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x -= hero.speed;
        alert("YOU WIN MF");
    }
  
    else if (gameArray[playerRow][playerCol - 1] === BOX) {
        if (gameArray[playerRow][playerCol - 2] !== WALL && gameArray[playerRow][playerCol - 2] !== BOX && gameArray[playerRow][playerCol - 2] !== WATER) {
            gameArray[playerRow][playerCol - 1] = 1;
            //boxCol--;
            gameArray[playerRow][playerCol - 2] = BOX;
            playerArray[playerRow][playerCol] = 0;
            playerCol--;
            playerArray[playerRow][playerCol] = PLAYER;
            box.x -= hero.speed;
            ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
            hero.x -= hero.speed;
        }
        else if (gameArray[playerRow][playerCol - 2] === WATER) {
            gameArray[playerRow][playerCol - 1] = 1;
            //boxCol++;
            gameArray[playerRow][playerCol - 2] = 1;
        }
    } 
    else if (playerRow > 0 && gameArray[playerRow][playerCol - 1] !== WALL ) {
        playerArray[playerRow][playerCol] = 0;
        playerCol--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x -= hero.speed;
    }
}

function checkRightMovement() {
    if (gameArray[playerRow][playerCol + 1] === EXIT) {
        playerArray[playerRow][playerCol] = 0;
        playerCol++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x += hero.speed;
        alert("YOU WIN MF");
    }
   
    else if (gameArray[playerRow][playerCol + 1] === BOX) {
        if (gameArray[playerRow][playerCol + 2] !== WALL && gameArray[playerRow][playerCol + 2] !== BOX && gameArray[playerRow][playerCol + 2] !== WATER) {
            gameArray[playerRow][playerCol + 1] = 1;
            //boxCol++;
            gameArray[playerRow][playerCol + 2] = BOX;
            playerArray[playerRow][playerCol] = 0;
            playerCol++;
            playerArray[playerRow][playerCol] = PLAYER;
            box.x += hero.speed;
            ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
            hero.x += hero.speed;
        }
        else if (gameArray[playerRow][playerCol + 2] === WATER){
            gameArray[playerRow][playerCol + 1] = 1;
            //boxCol++;
            gameArray[playerRow][playerCol + 2] = 1;
        }
    } 
    else if (playerRow < COL_LENGTH && gameArray[playerRow][playerCol + 1] !== WALL ) {
        playerArray[playerRow][playerCol] = 0;
        playerCol++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x += hero.speed;
    }
}


// Update game objects
var update = function (speed) {
    //MOVE UP
    if (38 in keysDown ) {
        checkUpMovement();
    }
    //MOVE DOWN
    if (40 in keysDown ) {
        checkDownMovement();
    }
    //MOVE LEFT
    if (37 in keysDown) {
        checkLeftMovement();
    }
    //MOVE RIGHT
    if (39 in keysDown) {
        checkRightMovement();
    }
};

 bgArray = getNextLevel();
 gameArray = bgArray;
        //gameArray[1][1] = PLAYER;
        //gameArray[START_ROW_BOX_1][START_COL_BOX_1] = BOX;
        
// The main game loop
 function levelHandler(levelNR, reset) {
     console.log(levelNR)
     bgArray = getLevel(levelNR);
     playerArray = getPlayerArray();
     gameArray = bgArray;
     drawmap();
     render();
 }
function updateNewLevel() {
    bgArray = getNextLevel();
    gameArray = bgArray;
    gameArray[1][1] = PLAYER;
    gameArray[START_ROW_BOX_1][START_COL_BOX_1] = BOX;
    playerArray[playerRow][playerCol] = PLAYER;
    drawmap();
    setNewLevel(false);
}


var main = function () {

    if (getNewLevel() === true) {
       
    }
    if (getResetLevel() === true) {
        bgArray = resetLevel();
        gameArray = bgArray;

        playerArray = getPlayerArray();

        //console.log(playerArray);
        //console.log(gameArray);
        //gameArray[1][1] = PLAYER;
        //gameArray[START_ROW_BOX_1][START_COL_BOX_1] = BOX;
        //playerRow = 1;
        //playerCol = 1;
        //playerArray = getPlayerArray();
        //playerArray[playerRow][playerCol] = PLAYER;
        drawmap();
        setResetLevel(false);
    }
    render();
    requestAnimationFrame(main);
};




drawmap = function () {
    
    var x = 0;
    var y = 0;
    var b = 0;

    for (i = 0; i < bgArray.length; i++) {

        for (c = 0; c < bgArray[b].length; c++) {
            var object = bgArray[b];
            if (object[c] === MOVABLE) {
                ctx1.drawImage(bgImage, x, y);
            }
            if (object[c] === WALL) {
                ctx1.drawImage(walls, x, y);
            }
            if (object[c] === EXIT) {
                ctx1.drawImage(exit, x, y);
            }

            if (object[c] === PLAYER) {
                //ctx1.drawImage(heroImage, x, y);
                //console.log(i, c)
                playerRow = i;
                playerCol = c;
                playerArray = getPlayerArray();
                playerArray[playerRow][playerCol] = PLAYER;
                hero.x = x;
                hero.y = y;
                
            }
                 /*      
            if (object[c] === BOX) {
                //ctx1.drawImage(heroImage, x, y);
                //console.log(i, c)
                boxRow = i;
                boxCol = c;
                box.x = x;
                box.y = y;

            }*/

            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
}

// Draw everything
var render = function () {
    var x = 0;
    var y = 0;
    var b = 0;
    ctx2.clearRect(0, 0, 512, 480);
    ctx2.drawImage(heroImage, hero.x, hero.y);


    for (i = 0; bgArray.length > i; i++) {
        for (c = 0; bgArray[b].length > c; c++) {
            object = bgArray[b];
            if (object[c] === BOX) {
                ctx2.drawImage(monsterImage, x, y);
            }
            if (object[c] === WATER) {
                ctx2.drawImage(water, x, y);
            }
            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
    

};


function setBgArray(tmpBgArr) {
    bgArray = tmpBgArr;
}

function getBgArray() {
    return bgArray;
}
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
                box.x = x;
                box.y = y;
                
            }
            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
    
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();

main();
Initiate();