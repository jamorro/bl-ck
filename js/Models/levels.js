function Levels() {
}

Levels.prototype = {
    // levels 0 = nothing = 1 block 2 = hole
    level1: function () {
        var items = [[1, 2], [3, 4], [5, 6]];
        console.log(items[0][0]);
        console.log(items[1][1]);
        console.log(items[1][2]);
        /*var layout = [[]];
        layout[0][1] = 0;
        layout[0][2] = 1;*/
    },
}