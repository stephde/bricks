var racketRenderer = new RacketRenderer()
racketRenderer.setCanvasContext(mockCanvasContext)

var sampleRacket = new Racket()

describe("the RacketRenderer ", function() {

    it("should create a valid RacketRenderer instance", function() {
        expect(racketRenderer).not.toBeNull()
    })

    it("should render the racket", function() {
        spyOn(mockCanvasContext, "fillRect")
        spyOn(mockCanvasContext, "strokeRect")

        racketRenderer.render(sampleRacket)

        expect(mockCanvasContext.fillRect).toHaveBeenCalled()
        expect(mockCanvasContext.strokeRect).toHaveBeenCalled()
    })

    it("should support racket colors", function() {
        racketRenderer.render(sampleRacket)

        expect(mockCanvasContext.fillStyle).toEqual(sampleRacket.colors.fill)
        expect(mockCanvasContext.strokeStyle).toEqual(sampleRacket.colors.stroke)
    })
})