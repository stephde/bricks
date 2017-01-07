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

    this.intersectsWithRect = function(rect) {
        var distX = Math.abs(this.x - rect.x - rect.width/2),
            distY = Math.abs(this.y - rect.y - rect.height/2)

        if (distX > (rect.width / 2 + this.radius))  
            return false
        if (distY > (rect.height / 2 + this.radius)) 
            return false

        if (distX <= (rect.width / 2)) 
            return true 
        if (distY <= (rect.height / 2))
            return true

        var cornerDistance_sq = Math.pow(distX - rect.width / 2, 2) +
                            Math.pow(distY - rect.height / 2, 2)

        return (cornerDistance_sq <= Math.pow(this.radius, 2))
    }

    this.update = function() {
        this.x += this.vx
        this.y += this.vy
    }

    return this
}