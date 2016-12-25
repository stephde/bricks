// main module for bricks game
var brickLoader = new BrickLoader(),
    brickRenderer = new BrickRenderer(),
    racketRenderer = new RacketRenderer(),
    ballRenderer = new BallRenderer(),
    canvasContext;

var brickData = "bbbbbbbbbbbrrrrrgggg",
    racket,
    ball


function loadCanvas(selector) {
    canvasContext = document.querySelector(selector).getContext("2d")
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

function update() {
    ball.update()
    racket.update()
}

function startGame(canvasSelector) {
    console.log("games has started")

    loadData(canvasSelector)

    requestAnimationFrame(mainLoop)

    registerEventHandling()

    return true
}

function mainLoop() {
    update()
    render()
    requestAnimationFrame(mainLoop)
}