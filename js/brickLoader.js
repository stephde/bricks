
var BrickLoader = function() {
    this.bricks = []
    
    this.loadBricksFromString = function(data) {
        //parse bricks from data
        for(var i = 0; i < data.length; i++){
            var colors = {
                stroke: "black"
            }

            switch(data[i]) {
                case 'r':   colors.fill = "red"
                            break
                case'b':    colors.fill = "blue"
                            break
                case'g':    colors.fill = "green"
                            break
            }
            var brick = new Brick(i * Brick.defaultWith, 1 * Brick.defaultHeight, colors)
            this.bricks.push(brick)
        }

        return true
    }

    this.getBricks = function() {
        return this.bricks
    }

    this.removeBrickAt = function(index) {
        var removedBrick
        if (index > -1) {
            removedBrick = this.bricks.splice(index, 1);
        }

        return removedBrick
    }

    return this
}