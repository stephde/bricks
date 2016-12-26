var ball

describe("The ball", function() {

    beforeEach(function() {
        ball = new Ball()
    })

    it("should set default values", function() {
        expect(ball.x).not.toBeLessThan(1)
        expect(ball.y).not.toBeLessThan(1)
        expect(ball.radius).not.toBeLessThan(1)
        expect(ball.vx).not.toBeLessThan(0.1)
        expect(ball.vy).toBeLessThan(0.1)
    })

    it("should move on update", function() {
        var xOld = ball.x,
            yOld = ball.y

        ball.update()

        expect(ball.x).toBeGreaterThan(xOld)
        expect(ball.y).toBeLessThan(yOld)
    })

    it("should invert the xVelocity", function() {
        ball.invertVX()

        expect(ball.vx).toBeLessThan(0)
    })

    it("should invert the yVelocity", function() {
        ball.invertVY()

        expect(ball.vy).toBeGreaterThan(0)
    })
})