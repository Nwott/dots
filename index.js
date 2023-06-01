var calculator
var numOfDotsFld
var radiusFld
var numOfDots
var radius
var defaultState

window.onload = function() {
    getElements()
    setupGraph()
    update()
}

function getElements() {
    numOfDotsFld = document.getElementById("numofdots")
    radiusFld = document.getElementById("radius")

    numOfDots = numOfDotsFld.value
    radius = radiusFld.value
}

function setupGraph() {
    var elt = document.getElementById('calculator');
    calculator = Desmos.GraphingCalculator(elt, {
        keypad: false,
        expressions: false,
        settingsMenu: false,
        zoomButtons: false,
        showGrid: false,
        showXAxis: false,
        showYAxis: false
    });

    defaultState = calculator.getState()
}

function update() {
    calculator.setState(defaultState)
    var equation = ""

    numOfDots = numOfDotsFld.value
    radius = radiusFld.value

    for(let i = 0; i < numOfDots; i++) {
        let x = (Math.random() * radius) - (radius / 2)
        let y = (Math.random() * radius) - (radius / 2)

        equation += "("
        equation += x
        equation += ","
        equation += y
        equation += ")"

        calculator.setExpression({id: i, latex: equation})
        equation = ""
    }

}