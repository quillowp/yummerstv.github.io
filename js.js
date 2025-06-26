const gameStart = document.getElementById("gameStart")
const canvas = document.getElementById("game")

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

gameStart.onclick = async function() {
    gameStart.remove()
    let load = document.createElement("div")
    load.setAttribute("id", "load")
    let loadInner = document.createElement("div")
    loadInner.setAttribute("id", "loadInner")
    document.getElementById("gameDiv").appendChild(load)
    await delay(Math.random()*(1200-200) + 600)
    load.appendChild(loadInner)
    await delay(Math.random()*(400-0) + 0)
    document.getElementById("loadInner").style.width = Math.random()*(117-77) + 77
    await delay(100)
    load.remove()

    let player = document.createElement("div")
    player.setAttribute("id", "player")
    const gameDiv = document.getElementById("gameDiv")
    document.body.insertBefore(player, gameDiv)
}

up = false
right = false
down = false
left = false

let x = 694
let y = 2187
let speed = 1.5
let diagonalSpeed = 1.1
let defaultSpeed = speed

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key; // Gets the string representation of the key (e.g., "Enter", "a", "ArrowUp")
  const keyCode = event.keyCode; // Gets the numeric key code (deprecated, but still commonly used for older browsers)

  console.log(`Key pressed: ${keyPressed}`);
  console.log(`Key Code: ${keyCode}`);
   if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || 
        event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        
        // Prevent the default scrolling behavior
        event.preventDefault();
    }
  // Example: Perform an action if the "Enter" key is pressed
  if (keyPressed === 'ArrowLeft') {
    left = true
  }
  if (keyPressed === 'ArrowRight') {
    right = true
  }
  if (keyPressed === 'ArrowUp') {
    up = true
  }
  if (keyPressed === 'ArrowDown') {
    down = true
  }

  if ((left == true || right == true) && (up == true || down == true)) {
    speed = diagonalSpeed
  } else {
    speed = defaultSpeed
  }

  // Example: Prevent default behavior (e.g., prevent form submission on Enter)

});

document.addEventListener('keyup', (event) => {
  const keyPressed = event.key; // Gets the string representation of the key (e.g., "Enter", "a", "ArrowUp")
  const keyCode = event.keyCode; // Gets the numeric key code (deprecated, but still commonly used for older browsers)

  console.log(`Key pressed: ${keyPressed}`);
  console.log(`Key Code: ${keyCode}`);

  // Example: Perform an action if the "Enter" key is pressed
  if (keyPressed === 'ArrowLeft') {
    left = false
  }
  if (keyPressed === 'ArrowRight') {
    right = false
  }
  if (keyPressed === 'ArrowUp') {
    up = false
  }
  if (keyPressed === 'ArrowDown') {
    down = false
  }

  if ((left == true || right == true) && (up == true || down == true)) {
    speed = diagonalSpeed
  } else {
    speed = defaultSpeed
  }
  // Example: Prevent default behavior (e.g., prevent form submission on Enter)

});


const gameloop = setInterval(() => {
    if (left) {
        x -= speed
    }
    if (right) {
        x += speed
    }
    if (down) {
        y += speed
    }
    if (up) {
        y -= speed
    }

    let player = document.getElementById("player")
    player.style.left = x + "px"
    player.style.top = y + "px"
    
}, 10);
