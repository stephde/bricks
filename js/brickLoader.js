
var BrickLoader = function() {
    var bricks = []
    
    this.loadBricksFromString = function(data) {
        //parse bricks from data
        //set bricks
        for(var i = 0; i < data.length; i++){
            bricks.push(new Brick(i, 1))
        }

        return true
    }

    this.getBricks = function() {
        return bricks
    }

    return this
}