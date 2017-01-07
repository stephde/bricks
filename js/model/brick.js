var Brick = function(x, y, colors) {
    this.x = x
    this.y = y
    this.width = Brick.defaultWith
    this.height = Brick.defaultHeight
    this.colors = {
        fill: colors ? colors.fill : "red",
        stroke: colors ? colors.stroke : "black"
    }

    return this
}

Brick.defaultWith = 15
Brick.defaultHeight = 7