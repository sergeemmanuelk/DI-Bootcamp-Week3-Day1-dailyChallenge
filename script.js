// Create an array which value is the planets of the solar system
let arrayPlanets = ["Earth", "Mars", "Jupiter", "Venus", "Uranus", "Mercury", "Saturn", "Neptune"]
let arrayColors = ["aqua", "orangered", "red", "coral", "cadetblue", "lightgray", "moccasin", "dodgerblue"]

let listPlanets = document.querySelector(".listPlanets")

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (let i = 0; i < arrayPlanets.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add("planet")
    let planetName = document.createTextNode(arrayPlanets[i])
    newDiv.appendChild(planetName)
    newDiv.style.background = arrayColors[i]
    newDiv.style.margin = "5px"
    newDiv.style.fontWeight = "bold"
    newDiv.style.verticalAlign = "middle"
    newDiv.style.lineHeight = "100px"
    newDiv.style.height = "100px"
    newDiv.style.verticalAlign = "middle"
    listPlanets.appendChild(newDiv)
    console.log(newDiv)

}