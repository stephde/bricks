var RacketRenderer = function() {

    var canvasContext

    this.loadCanvas = function(selector) {
        canvasContext = document.querySelector(selector).getContext("2d")
    }

    this.getCanvasContext = function() {
        return canvasContext
    }

    this.setCanvasContext = function(newContext) {
        canvasContext = newContext
    }

    this.render = function(racket) {
        canvasContext.fillStyle = racket.colors.fill
        canvasContext.strokeStyle = racket.colors.stroke
        
        canvasContext.fillRect(racket.x, racket.y, racket.width, racket.height)
        canvasContext.strokeRect(racket.x, racket.y, racket.width, racket.height)
    }

    return this
}