var brickRenderer = new BrickRenderer()
var mockCanvasContext = {
    fillStyle: null,
    strokeStyle: null,
    fillRect: function(){},
    strokeRect: function(){}
}
var sampleSelector = "#canvas"
var colors = {
    fill: "blue",
    stroke: "black"
}
var sampleBricks = [new Brick(1,1,colors), 
                    new Brick(2,1,colors), 
                    new Brick(3,1,colors)]

describe("the BrickRenderer", function() {

    it("should create a valid BrickRenderer instance", function() {
        expect(brickRenderer).not.toBeNull();
    })

    it("should load the canvas", function() {
        spyOn(document, "querySelector").and.returnValue({
            getContext: function(){}
        })

        brickRenderer.loadCanvas(sampleSelector)

        expect(document.querySelector).toHaveBeenCalledWith(sampleSelector)
    })

    it("should render each brick", function() {
        brickRenderer.setCanvasContext(mockCanvasContext)
        spyOn(mockCanvasContext, "fillRect")
        spyOn(mockCanvasContext, "strokeRect")

        brickRenderer.render(sampleBricks)

        expect(mockCanvasContext.fillRect).toHaveBeenCalledTimes(sampleBricks.length)
        expect(mockCanvasContext.strokeRect).toHaveBeenCalledTimes(sampleBricks.length)
    })

    it("should render multiple colors", function() {
        brickRenderer.setCanvasContext(mockCanvasContext)
        brickRenderer.render(sampleBricks)

        expect(mockCanvasContext.fillStyle).toEqual(colors.fill)
        expect(mockCanvasContext.strokeStyle).toEqual(colors.stroke)
    
    })
})