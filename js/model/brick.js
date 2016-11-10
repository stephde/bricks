var Brick = function(x, y, colors) {
    this.x = x
    this.y = y
    this.width = 15
    this.height = 5
    this.colors = {
        fill: colors ? colors.fill : "red",
        stroke: colors ? colors.stroke : "black"
    }

    return this
}