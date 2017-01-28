var RacketRenderer = function() {

    this.canvasContext = null
    
    this.getCanvasContext = function() {
        return this.canvasContext
    }

    this.setCanvasContext = function(newContext) {
        this.canvasContext = newContext
    }

    this.render = function(racket) {
        this.canvasContext.fillStyle = racket.colors.fill
        this.canvasContext.strokeStyle = racket.colors.stroke
        
        this.canvasContext.fillRect(racket.x, racket.y, racket.width, racket.height)
        this.canvasContext.strokeRect(racket.x, racket.y, racket.width, racket.height)
    }

    return this
}