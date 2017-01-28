
var createMocks = function() {
    this.mockCanvasContext = {
        fillStyle: null,
        strokeStyle: null,
        fillRect: function() {},
        strokeRect: function() {},
        arc: function() {},
        fill: function() {},
        stroke: function() {},
        beginPath: function() {},
        closePath: function() {}
    }

    return this
}

var Mocks = createMocks()