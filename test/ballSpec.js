var ball = new Ball()

describe("The ball", function() {

    it("should set default values", function() {
        expect(ball.x).not.toBeLessThan(1)
        expect(ball.y).not.toBeLessThan(1)
        expect(ball.radius).not.toBeLessThan(1)
        expect(ball.vx).not.toBeLessThan(1)
        expect(ball.vy).not.toBeLessThan(1)
    })

    it("should move on update", function() {
        var xOld = ball.x,
            yOld = ball.y

        ball.update()

        expect(ball.x).toBeGreaterThan(xOld)
        expect(ball.y).toBeGreaterThan(yOld)
    })
})