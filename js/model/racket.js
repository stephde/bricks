var Racket = function() {
    this.x = 130
    this.y = 140
    this.width = 40
    this.height = 7
    this.colors = {
        fill: "gray",
        stroke: "black"
    }
    this.vx = 0

    this.moveLeft = function() {
        this.vx -= 0.5
    }

    this.moveRight = function() {
        this.vx += 0.5
    }

    this.update = function() {
        this.x += this.vx
    }

    return this
}