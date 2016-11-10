var racketRenderer = new RacketRenderer()

var mockCanvasContext = {
    fillStyle: null,
    strokeStyle: null,
    fillRect: function(){},
    strokeRect: function(){}
}

var sampleRacket = new Racket()

describe("the RacketRenderer ", function() {

    it("should create a valid RacketRenderer instance", function() {
        expect(racketRenderer).not.toBeNull()
    })

    it("should render the racket", function() {
        racketRenderer.setCanvasContext(mockCanvasContext)
        spyOn(mockCanvasContext, "fillRect")
        spyOn(mockCanvasContext, "strokeRect")

        racketRenderer.render(sampleRacket)

        expect(mockCanvasContext.fillRect).toHaveBeenCalled()
        expect(mockCanvasContext.strokeRect).toHaveBeenCalled()
    })

    it("should support racket colors", function() {
        racketRenderer.setCanvasContext(mockCanvasContext)
        racketRenderer.render(sampleRacket)

        expect(mockCanvasContext.fillStyle).toEqual(sampleRacket.colors.fill)
        expect(mockCanvasContext.strokeStyle).toEqual(sampleRacket.colors.stroke)
    })
})