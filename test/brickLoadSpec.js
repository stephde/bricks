var brickLoader,
    bricksData = "bgrbbbbbbb"

describe("the BrickLoader ", function() {

    beforeEach(function() {
        brickLoader = new BrickLoader()
    })

    it("should be defined", function() {
        expect(BrickLoader).not.toBeNull()
    })

    it("should create a valid brickloader instance", function() {
        expect(brickLoader).not.toBeNull()
    })

    it("should return the bricks on getBricks", function() {
        brickLoader.loadBricksFromString(bricksData)
        expect(brickLoader.getBricks()).not.toBeNull()
    })

    it("should be able to load bricks from a string", function() {
        expect(brickLoader.loadBricksFromString(bricksData)).toBe(true)
        expect(brickLoader.getBricks().length).toBeGreaterThan(0)
        expect(brickLoader.getBricks().length).toEqual(bricksData.length)
    })

    it("should be able to display bricks with multiple colors", function() {
        expect(brickLoader.loadBricksFromString(bricksData)).toBe(true)
        expect(brickLoader.getBricks()[0].colors.fill).toEqual("blue")
        expect(brickLoader.getBricks()[1].colors.fill).toEqual("green")
        expect(brickLoader.getBricks()[2].colors.fill).toEqual("red")
    })

    it("should remove brick from array", function() {
        brickLoader.loadBricksFromString(bricksData)
        var count = brickLoader.getBricks().length,
            oldBrick = brickLoader.getBricks()[2]
        
        var removedBrick = brickLoader.removeBrickAt(2)

        //expect(removedBrick.x).toEqual(oldBrick.x)
        expect(brickLoader.getBricks().length).toEqual(count - 1)
    })
})