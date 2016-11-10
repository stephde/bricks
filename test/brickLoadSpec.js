var brickloader = new BrickLoader()
var bricksData = "bgrbbbbbbb"

describe("the BrickLoader ", function() {

    it("should be defined", function() {
        expect(BrickLoader).not.toBeNull()
    })

    it("should create a valid brickloader instance", function() {
        expect(brickLoader).not.toBeNull()
    })

    it("should return the bricks on getBricks", function() {
        expect(brickloader.getBricks()).not.toBeNull()
    })

    it("should be able to load bricks from a string", function() {
        expect(brickloader.loadBricksFromString(bricksData)).toBe(true)
        expect(brickloader.getBricks().length).toBeGreaterThan(0)
        expect(brickloader.getBricks().length).toEqual(bricksData.length)
    })

    it("should be able to display bricks with multiple colors", function() {
        expect(brickloader.loadBricksFromString(bricksData)).toBe(true)
        expect(brickloader.getBricks()[0].colors.fill).toEqual("blue")
        expect(brickloader.getBricks()[1].colors.fill).toEqual("green")
        expect(brickloader.getBricks()[2].colors.fill).toEqual("red")
    })
})