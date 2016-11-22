// main module for bricks game
var brickLoader = new BrickLoader(),
    brickRenderer = new BrickRenderer(),
    racketRenderer = new RacketRenderer(),
    ballRenderer = new BallRenderer()

var brickData = "bbbbbbbbbbbrrrrrgggg",
    racket = new Racket(),
    ball = new Ball()

function loadData(canvasSelector) {
    brickLoader.loadBricksFromString(brickData)

    //ToDo: refactor this (inheritance)
    var canvasContext = brickRenderer.loadCanvas(canvasSelector)
    racketRenderer.setCanvasContext(canvasContext)
    ballRenderer.setCanvasContext(canvasContext)
}

function render() {
    brickRenderer.render(brickLoader.getBricks())
    racketRenderer.render(racket)
    ballRenderer.render(ball)
}

function startGame(canvasSelector) {
    console.log("games has started")

    loadData(canvasSelector)

    render()

    return true
}