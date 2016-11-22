var BallRenderer = function() {

    var canvasContext

    this.getCanvasContext = function() {
        return canvasContext
    }

    this.setCanvasContext = function(newContext) {
        canvasContext = newContext
    }

    this.render = function(ball) {
        canvasContext.fillStyle = ball.colors.fill
        canvasContext.strokeStyle = ball.colors.stroke

        canvasContext.beginPath();
        canvasContext.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, true);
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, true);
        canvasContext.stroke();
        canvasContext.closePath();
    }

    return this
}