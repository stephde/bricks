
var BrickLoader = function() {
    var bricks = []
    
    this.loadBricksFromString = function(data) {
        //parse bricks from data
        //set bricks
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
            bricks.push(new Brick(i, 1, colors))
        }

        return true
    }

    this.getBricks = function() {
        return bricks
    }

    return this
}