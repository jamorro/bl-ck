//initiating the different layers of canvas needed
var layer1;
var layer2;
var layer3;
var ctx1;
var ctx2;
//var ctx3;
layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
//layer3 = document.getElementById("layer3");
//ctx3 = layer3.getContext("2d");
//15*16
// Background image

//
var walls = new Image();
var bgImage = new Image();
var exit = new Image();
var water = new Image();
var boxArray = [];
water.src = "images/water.png";
walls.src = "images/wall.png";
exit.src = "images/exit.png";
bgImage.src = "images/Tile.png";

// Hero images
var heroRight = new Image();
var heroLeft = new Image();
var heroDown = new Image();
var heroUp = new Image();
var heroImage = new Image();
heroImage.src = "images/heroDown.png";
heroRight.src = "images/heroRight.png";
heroLeft.src = "images/heroLeft.png";
heroUp.src = "images/heroUp.png";
heroDown.src = "images/heroDown.png";


// Monster image
var boxImage = new Image();
boxImage.src = "images/wood.jpg";

//size of each square
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
var WATER = 5;

//defining variables
var ROWS_LENGTH = 16;
var COL_LENGTH = 15;
var START_ROW_PLAYER;
var START_COL_PLAYER;
var gameArray;
var playerRow;
var playerCol;
var bgArray;
var playerArray;
var goal = 1;

bgArray = getNextLevel();
gameArray = bgArray;

//when the background has loaded draw the map.
bgImage.onload = function () {
    drawmap();
}



// Game objects
var hero = {
    speed: 32 // movement in pixels per second
};
var box = {};

// Handle keyboard controls
var fired = false;
var keysDown = [];

//eventlisterners for movement
addEventListener("keydown", function (e) {
    if (!fired && keysDown.length === 0){
        keysDown[e.keyCode] = true;
        fired = true;
        update();
        console.log(e.keyCode);
    };
}, false);

addEventListener("keyup", function (e) {
        fired = false;
        keysDown = [];

}, false);


//functions that handle the main movement. The character moves around in a array and the system keeps track of the position of the hero and the other elements via these 2 arrays
function checkUpMovement() {

    if (gameArray[playerRow - 1][playerCol] === EXIT) {
        playDinoEatingSound();
        playerArray[playerRow][playerCol] = 0;
        playerRow--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y -= hero.speed;
        progressLevels();
    }
    else if (gameArray[playerRow - 1][playerCol] === BOX && gameArray[playerRow - 1][playerCol] !== WATER) {
        if (gameArray[playerRow - 2][playerCol] !== WALL && gameArray[playerRow - 2][playerCol] !== BOX && gameArray[playerRow - 2][playerCol] !== WATER) {
            gameArray[playerRow - 1][playerCol] = 1;
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
            gameArray[playerRow - 2][playerCol] = 1;
        }
    } 
    else if (playerRow > 0 && gameArray[playerRow - 1][playerCol] !== WALL && gameArray[playerRow - 1][playerCol] !== WATER) {
        playerArray[playerRow][playerCol] = 0;
        playerRow--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y -= hero.speed;
    }
}

function checkDownMovement() {

    if (gameArray[playerRow + 1][playerCol] === EXIT) {
        playDinoEatingSound();
        playerArray[playerRow][playerCol] = 0;
        playerRow++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y += hero.speed;
        progressLevels();
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
            gameArray[playerRow + 2][playerCol] = 1;
        }    
    } 
    else if (playerRow < ROWS_LENGTH && gameArray[playerRow + 1][playerCol] !== WALL && gameArray[playerRow + 1][playerCol] !== WATER) {
        playerArray[playerRow][playerCol] = 0;
        playerRow++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.y += hero.speed;
    }
}

function checkLeftMovement() {
    
    if (gameArray[playerRow][playerCol - 1] === EXIT) {
        playDinoEatingSound();
        playerArray[playerRow][playerCol] = 0;
        playerCol--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x -= hero.speed;
        //alert("YOU WIN MF");
        progressLevels();
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
            gameArray[playerRow][playerCol - 2] = 1;
        }
    } 
    else if (playerRow > 0 && gameArray[playerRow][playerCol - 1] !== WALL && gameArray[playerRow][playerCol - 1] !== WATER) {
        playerArray[playerRow][playerCol] = 0;
        playerCol--;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x -= hero.speed;
    }
}

function checkRightMovement() {
    if (gameArray[playerRow][playerCol + 1] === EXIT) {
        playDinoEatingSound();
        playerArray[playerRow][playerCol] = 0;
        playerCol++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x += hero.speed;
        //alert("YOU WIN MF");
        progressLevels();
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
    else if (playerRow < COL_LENGTH && gameArray[playerRow][playerCol + 1] !== WALL && gameArray[playerRow][playerCol + 1] !== WATER) {
        playerArray[playerRow][playerCol] = 0;
        playerCol++;
        playerArray[playerRow][playerCol] = PLAYER;
        ctx2.clearRect(hero.y, hero.x, WIDTH, HEIGHT);
        hero.x += hero.speed;
    }
}

//handles the switching of images based on direction
var heroMovementPicture = heroImage;

function setHeroPicture(tmpImg) {
    heroMovementPicture = tmpImg;
}

function getHeroPicture() {
    return heroMovementPicture;
}

// Update game objects
var update = function (speed) {
    //MOVE UP
    if (38 in keysDown ) {
        setHeroPicture(heroUp);
        checkUpMovement();
    }
    //MOVE DOWN
    if (40 in keysDown ) {
        setHeroPicture(heroDown);
        checkDownMovement();
    }
    //MOVE LEFT
    if (37 in keysDown) {
        setHeroPicture(heroLeft);
        checkLeftMovement();
    }
    //MOVE RIGHT
    if (39 in keysDown) {
        setHeroPicture(heroRight);
        checkRightMovement();
    }
    //ESC
    if (27 in keysDown) {
        window.location = "start_screen.html";
    }
    //NEW GAME
    if (78 in keysDown) {
        window.location = "play_game.html";
    }
    //MUTE
    if (77 in keysDown) {
        muteSound();
    }
    //RESET
    if (82 in keysDown) {
        levelHandler(getCurrentLevel());
    }
    //CHANGE LANGUAGE
    if (76 in keysDown) {
        changeLanguage();
    }
    //MUTE VILLES MAC
    if (81 in keysDown) {
        muteSound();
    }
    //RESET VILLES MAC
    if (87 in keysDown) {
        levelHandler(getCurrentLevel());
    }

};

 
// The function in charge of changing or resetting the levels
 function levelHandler(levelNR) {
    
    createLevelList();
    bgArray = getLevel(levelNR);
    playerArray = getPlayerArray();
    gameArray = bgArray;
    drawmap();
    render();
 }

//The main game loop
var main = function () {
    render();
    requestAnimationFrame(main);
};

//draws the objects onto the map based on the array
drawmap = function () {
    
    var x = 0;
    var y = 0;
    var b = 0;
    ctx2.clearRect(0, 0, 512, 480);
    ctx1.clearRect(0, 0, 512, 480);
    ctx1.drawImage(bgImage, hero.x, hero.y);
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
                playerRow = i;
                playerCol = c;
                playerArray = getPlayerArray();
                playerArray[playerRow][playerCol] = PLAYER;
                hero.x = x;
                hero.y = y;
                
            }
            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
}

// Draws the new position of things
var render = function () {
    var x = 0;
    var y = 0;
    var b = 0;
    ctx2.clearRect(0, 0, 512, 480);
    ctx2.drawImage(getHeroPicture(), hero.x, hero.y);
    ctx1.drawImage(bgImage, hero.x, hero.y);
    for (i = 0; bgArray.length > i; i++) {
        for (c = 0; bgArray[b].length > c; c++) {
            object = bgArray[b];
            if (object[c] === BOX) {
                ctx1.drawImage(bgImage, x, y);
                ctx2.drawImage(boxImage, x, y);
            }
            /*if (object[c] === WATER) {
                ctx2.drawImage(water, x, y);
                ctx1.drawImage(bgImage, x, y);
            }*/
            if (object[c] === MOVABLE) {
                ctx1.drawImage(bgImage, x, y);
            }
            x = x + 32;
        }
        x = 0;
        b++;
        y = y + 32;
    }
};


var then = Date.now();


//plays music
playBackgroundMusic();

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Loops the document
main();
createLevelList();