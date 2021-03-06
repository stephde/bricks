var BrickRenderer = function() {

    var canvasContext

    this.getCanvasContext = function() {
        return canvasContext
    }

    this.setCanvasContext = function(newContext) {
        canvasContext = newContext
    }

    this.render = function(bricks) {
        for(var i=0; i < bricks.length; i++) {
            var current = bricks[i]
            renderRect(
                current.x,
                current.y,
                current.width - 1,
                current.height - 1,
                current.colors
            )
        }
    }

    function renderRect(x, y, width, height, colors) {
        canvasContext.fillStyle = colors.fill
        canvasContext.strokeStyle = colors.stroke

        canvasContext.fillRect(
            x,
            y,
            width,
            height
        )
        canvasContext.strokeRect(
            x,
            y,
            width,
            height
        )
    }

    return this
}