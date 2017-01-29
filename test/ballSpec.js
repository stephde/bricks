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

    it("should not intesect with default racket", function() {
        var racket = new Racket()

        expect(ball.intersectsWithRect(racket)).toBe(false)
    })

    it("should intersect with racket", function() {
        var racket = new Racket()
        racket.x = 100
        racket.y = 100

        ball.x = 98
        ball.y = 97
        expect(ball.intersectsWithRect(racket)).toBe(true)
        ball.x = 98
        ball.y = 103
        expect(ball.intersectsWithRect(racket)).toBe(true)

        ball.x = 140
        ball.y = 97
        expect(ball.intersectsWithRect(racket)).toBe(true)
        ball.x = 140
        ball.y = 103
        expect(ball.intersectsWithRect(racket)).toBe(true)
    })

    it("should not intersect with racket", function() {
        var racket = new Racket()
        racket.x = 100
        racket.y = 100

        ball.x = 96
        ball.y = 97
        expect(ball.intersectsWithRect(racket)).toBe(false)
        ball.x = 98
        ball.y = 116
        expect(ball.intersectsWithRect(racket)).toBe(false)

        ball.x = 148
        ball.y = 97
        expect(ball.intersectsWithRect(racket)).toBe(false)
        ball.x = 140
        ball.y = 116
        expect(ball.intersectsWithRect(racket)).toBe(false)
    })

    it("should intersect with brick", function() {
        var brick = new Brick(ball.x, ball.y)

        expect(ball.intersectsWithRect(brick)).toBe(true)
    })
    
    it("should increase the speed", function () {
        var vxOld = Math.abs(ball.vx),
            vyOld = Math.abs(ball.vy)

        ball.speedUp()

        expect(Math.abs(ball.vx)).toBeGreaterThan(vxOld)
        expect(Math.abs(ball.vy)).toBeGreaterThan(vyOld)
    })
})