// main module for bricks game
var brickLoader = new BrickLoader(),
    brickRenderer = new BrickRenderer(),
    racketRenderer = new RacketRenderer()

var brickData = "bbbbbbbbbbbrrrrrgggg",
    racket = new Racket()

function loadData(canvasSelector) {
    brickLoader.loadBricksFromString(brickData)

    //ToDo: refactor this (inheritance)
    brickRenderer.loadCanvas(canvasSelector)
    racketRenderer.loadCanvas(canvasSelector)

    render()
}

function render() {
    brickRenderer.render(brickLoader.getBricks())
    racketRenderer.render(racket)
}

function startGame(canvasSelector) {
    console.log("games has started")

    loadData(canvasSelector)

    return true
}