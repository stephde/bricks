var Ball = function() {
    this.x = 150
    this.y = 110
    this.radius = 4
    this.colors = {
        fill: "yellow",
        strokeColor: "brown"
    }

    this.vx = 1
    this.vy = -1

    this.invertVX = function() {
        this.vx *= -1
    }

    this.invertVY = function() {
        this.vy *= -1
    }

    this.update = function() {
        this.x += this.vx
        this.y += this.vy
    }

    return this
}