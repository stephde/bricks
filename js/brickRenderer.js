var BrickRenderer = function() {

    var canvasContext
    var fillStyle = "red"
    var strokeStyle = "black"

    this.loadCanvas = function(selector) {
        canvasContext = document.querySelector(selector).getContext("2d")
    }

    this.getCanvasContext = function() {
        return canvasContext
    }

    this.setCanvasContext = function(newContext) {
        canvasContext = newContext
    }

    this.render = function(bricks) {
        canvasContext.fillStyle = fillStyle
        canvasContext.strokeStyle = strokeStyle

        for(var i=0; i < bricks.length; i++) {
            var current = bricks[i]
            renderRect(
                current.x * current.width,
                current.y * current.height,
                current.width - 1,
                current.height - 1
            )
        }
    }

    function renderRect(x, y, width, height) {
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