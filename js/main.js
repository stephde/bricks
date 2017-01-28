// main module for bricks game
var brickLoader,
    brickRenderer = new BrickRenderer(),
    racketRenderer = new RacketRenderer(),
    ballRenderer = new BallRenderer(),
    canvas,
    canvasContext

var brickData = "bbbbbbbbbbbrrrrrgggg",
    racket,
    ball

var animationRequestId

/** only do this once on site load **/
registerEventHandling()


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
    var bricks = brickLoader.getBricks(),
        i = 0
    for(; i < bricks.length; i++) {
        if(ball.intersectsWithRect(bricks[i])) {
            ball.invertVY()
            ball.update()
            // --> destroy brick
            brickLoader.removeBrickAt(i)
            break;
        }
    }
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

    brickLoader = new BrickLoader()
    loadData(canvasSelector)

    //make sure animation loop is not in use anymore
    stopAnimation()
    //start new animation loop
    startAnimation()

    return true
}

function pauseGame() {
    if(animationRequestId == undefined) {
        //resume game
        startAnimation()
        this.value = "Pause"
    } else {
        //pause game
        stopAnimation()
        this.value = "Resume"
    }
}

function mainLoop() {
    update()
    render()
    
    if(animationRequestId)
        startAnimation()
}

function stopAnimation() {
    if (animationRequestId) {
       window.cancelAnimationFrame(animationRequestId);
       animationRequestId = undefined;
    }
}

function startAnimation() {
    animationRequestId = window.requestAnimationFrame(mainLoop)
}