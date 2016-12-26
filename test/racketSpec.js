var racket

describe("The racket", function() {

    beforeEach(function() {
        racket = new Racket()
    })

    it("should set default values", function() {
        expect(racket.x).not.toBeLessThan(1)
        expect(racket.y).not.toBeLessThan(1)
        expect(racket.vx).toEqual(0)
    })

    it("should move on update", function() {
        var xOld = racket.x,
            yOld = racket.y
        
        racket.vx = 1
        racket.update()

        expect(racket.x).toBeGreaterThan(xOld)
        expect(racket.y).toEqual(yOld)
    })

    it("should increase xVelocity on moveRight", function() {
        var vxOld = racket.vx

        racket.moveRight()

        expect(racket.vx).toBeGreaterThan(vxOld)
    })

    it("should decrease xVelocity on moveLeft", function() {
        var vxOld = racket.vx

        racket.moveLeft()

        expect(racket.vx).toBeLessThan(vxOld)
    })

    it("should stop on stop", function() {
        racket.vx = 1

        racket.stop()

        expect(racket.vx).toBe(0)
    })
})