// main module for bricks game
var brickLoader = new BrickLoader(),
    brickRenderer = new BrickRenderer(),
    racketRenderer = new RacketRenderer(),
    ballRenderer = new BallRenderer(),
    canvasContext;

var brickData = "bbbbbbbbbbbrrrrrgggg",
    racket = new Racket(),
    ball = new Ball()



function loadCanvas(selector) {
    canvasContext = document.querySelector(selector).getContext("2d")
    return canvasContext
}

function loadData(canvasSelector) {
    canvasContext = loadCanvas(canvasSelector)
    brickLoader.loadBricksFromString(brickData)

    //ToDo: refactor this (inheritance)
    brickRenderer.setCanvasContext(canvasContext)
    racketRenderer.setCanvasContext(canvasContext)
    ballRenderer.setCanvasContext(canvasContext)
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
}

function startGame(canvasSelector) {
    console.log("games has started")

    loadData(canvasSelector)

    requestAnimationFrame(mainLoop)

    return true
}

function mainLoop() {
    update()
    render()
    requestAnimationFrame(mainLoop)
}