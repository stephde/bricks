// main module for bricks game
var brickLoader = new BrickLoader(),
    brickRenderer = new BrickRenderer(),
    racketRenderer = new RacketRenderer(),
    ballRenderer = new BallRenderer(),
    canvas,
    canvasContext

var brickData = "bbbbbbbbbbbrrrrrgggg",
    racket,
    ball

var animationRequestId


function loadCanvas(selector) {
    canvas = document.querySelector(selector)
    canvasContext = canvas.getContext("2d")
    return canvasContext
}

function loadData(canvasSelector) {
    racket = new Racket(),
    ball = new Ball()

    canvasContext = loadCanvas(canvasSelector)
    brickLoader.loadBricksFromString(brickData)

    //ToDo: refactor this (inheritance)
    brickRenderer.setCanvasContext(canvasContext)
    racketRenderer.setCanvasContext(canvasContext)
    ballRenderer.setCanvasContext(canvasContext)
}

function registerEventHandling() {
    document.addEventListener('keydown', function(event) {
        //Left was pressed
        if(event.keyCode == 37) {
            racket.moveLeft()
        }
        //Right was pressed
        else if(event.keyCode == 39) {
            racket.moveRight()
        }
    });
}

function render() {
    //clear canvas
    canvasContext.clearRect(0, 0, 
            canvasContext.canvas.width, 
            canvasContext.canvas.height)

    //render
    brickRenderer.render(brickLoader.getBricks())
    racketRenderer.render(racket)
    ballRenderer.render(ball)
}

function detectBallCollisions() {
    //check ball against wall
    if(ball.x < 0 || ball.x > canvas.width)
        ball.invertVX()

    if(ball.y < 0)
        ball.invertVY()
    else if(ball.y > canvas.height)
        die()

    //check ball against racket
    if(ball.intersectsWithRect(racket))
        ball.invertVY()

    //check ball against bricks
    // --> destroy brick
}

function detectRacketCollisions() {
    //check racket against wall
    if(racket.x < 0 || racket.x > (canvas.width - racket.width))
        racket.stop()
}

function detectCollisions () {
    detectBallCollisions()
    detectRacketCollisions()
}

function die() {
    stopAnimation()
    alert("You lost!")
}

function update() {
    ball.update()
    racket.update()

    detectCollisions()
}

function startGame(canvasSelector) {
    console.log("games has started")

    loadData(canvasSelector)

    animationRequestId = requestAnimationFrame(mainLoop)

    registerEventHandling()

    return true
}

function mainLoop() {
    update()
    render()
    
    if(animationRequestId)
        animationRequestId = window.requestAnimationFrame(mainLoop)
}

function stopAnimation() {
    if (animationRequestId) {
       window.cancelAnimationFrame(animationRequestId);
       animationRequestId = undefined;
    }
}