var racketRenderer,
    mockCanvasContext = Mocks.mockCanvasContext,
    sampleRacket = new Racket()

var fakeContext = "fakeContext"

describe("the RacketRenderer ", function() {

    beforeEach(function () {
        racketRenderer = new RacketRenderer()
        racketRenderer.canvasContext = mockCanvasContext
    })

    it("should create a valid RacketRenderer instance", function() {
        expect(racketRenderer).not.toBeNull()
    })

    it("should set canvas context", function () {
        racketRenderer.setCanvasContext(fakeContext)

        expect(racketRenderer.canvasContext).toBe(fakeContext)
    })

    it("should get canvas context", function () {
        racketRenderer.canvasContext = fakeContext
        expect(racketRenderer.getCanvasContext()).toBe(fakeContext)
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