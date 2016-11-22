var ballRenderer = new BallRenderer()
ballRenderer.setCanvasContext(mockCanvasContext)

var sampleBall = new Ball()
sampleBall.colors = {
    fill: "green",
    stroke: "brown"
}

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
        spyOn(mockCanvasContext, "stroke")

        ballRenderer.render(sampleBall)

        expect(mockCanvasContext.arc).toHaveBeenCalledTimes(2)
        expect(mockCanvasContext.fill).toHaveBeenCalledTimes(1)  
        expect(mockCanvasContext.stroke).toHaveBeenCalledTimes(1)  
    })

    it("should support settings colors", function() {
        ballRenderer.setCanvasContext(mockCanvasContext)
        ballRenderer.render(sampleBall)

        expect(mockCanvasContext.fillStyle).toEqual(sampleBall.colors.fill)
        expect(mockCanvasContext.strokeStyle).toEqual(sampleBall.colors.stroke)
    })
})