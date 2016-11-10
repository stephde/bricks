// main module for bricks game
var brickLoader = new BrickLoader()
var brickRenderer = new BrickRenderer()

var sampleBrickData = "bbbbbbbbbbbrrrrrgggggggg"

function loadData(canvasSelector) {
    brickLoader.loadBricksFromString(sampleBrickData)
    brickRenderer.loadCanvas(canvasSelector)
    brickRenderer.render(brickLoader.getBricks())
}

function startGame(canvasSelector) {
    console.log("games has started")

    loadData(canvasSelector)

    return true
}