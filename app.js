// Variables
let gryffindorPoints = 0
let slytherinPoints = 0
let ravenclawPoints = 0
let hufflepuffPoints = 0

// Gryffindor Functions
function pointAwardedG() {
  gryffindorPoints += 1
  console.log('points-awarded')
  drawScore()
}

function pointRemovedG() {
  gryffindorPoints -= 1
  console.log('points-removed')
  drawScore()
}
// Slytherin Points
function pointAwardedS() {
  slytherinPoints += 1
  console.log('points-awarded')
  drawScore()
}

function pointRemovedS() {
  slytherinPoints -= 1
  console.log('points-removed')
  drawScore()
}

// Ravenclaw Functions
function pointAwardedR() {
  ravenclawPoints += 1
  console.log('points-awarded')
  drawScore()
}

function pointRemovedR() {
  ravenclawPoints -= 1
  console.log('points-removed')
  drawScore()
}

// Hufflepuff Functions
function pointAwardedH() {
  hufflepuffPoints += 1
  console.log('points-awarded')
  drawScore()
}

function pointRemovedH() {
  hufflepuffPoints -= 1
  console.log('points-removed')
  drawScore()
}


function drawScore() {
  document.getElementById('gryffindor-points').innerText = gryffindorPoints
  document.getElementById('slytherin-points').innerText = slytherinPoints
  document.getElementById('ravenclaw-points').innerText = ravenclawPoints
  document.getElementById('hufflepuff-points').innerText = hufflepuffPoints
  console.log();
}

drawScore()
