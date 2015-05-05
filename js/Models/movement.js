var X_POS_LEFT = 0;
var X_POS_RIGHT = 0;
var Y_POS_UP = 0;
var Y_POS_DOWN = 0;

function move(e) {
	
	switch (e.keyCode) {
		case 37 : //LEFT
			return X_POS_LEFT;
			break;
		case 39 : //RIGHT
			return X_POS_RIGHT;
			break;
		case 38 : //UP
			return Y_POS_UP;
			break;
		case 40 : //DOWN
			return Y_POS_DOWN;
			break;
	}

	console.log(X_POS_RIGHT)
	
}
