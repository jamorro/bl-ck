function Logic() {
    var _this = this;
}


Logic.prototype = {
    checkCollision: function (rect1, rect2) {
        if (object1.x < object2.x + object2.width && object1.x + object1.width > object2.x &&
		    object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
            // The objects are touching
            return "collision";
        }
    }
}