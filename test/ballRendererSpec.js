var ballRenderer = new BallRenderer()
ballRenderer.setCanvasContext(mockCanvasContext)

var sampleBall = new Ball()

describe("the BallRenderer ", function() {

    it("should be defined" , function() {
        expect(ballRenderer).not.toBeNull()
    })

    it("should have the canvasContext", function() {
        ballRenderer.setCanvasContext(mockCanvasContext)
        expect(ballRenderer.getCanvasContext()).toEqual(mockCanvasContext)
    })

    it("should render the ball", function() {
        ballRenderer.setCanvasContext(mockCanvasContext)
        spyOn(mockCanvasContext, "arc")
        spyOn(mockCanvasContext, "fill")

        ballRenderer.render(sampleBall)

        expect(mockCanvasContext.arc).toHaveBeenCalledTimes(1)
        expect(mockCanvasContext.fill).toHaveBeenCalledTimes(1)  
    })
})