const gameStart = document.getElementById("gameStart")
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const walls = document.getElementsByClassName("wall")
const interactables = document.getElementsByClassName("interact")
const collectibles = document.getElementsByClassName("collect")
const textBox = document.getElementById("textHidden")
const game1 = document.getElementsByClassName("game1")
const chatButton = document.getElementById("chatButton")
const chatText = document.getElementById("chatText")
const invInside = document.getElementById("invInside")
const openInv = document.getElementById("arrow")
const inventory = document.getElementById("inventory")




function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//player junkj
gameStart.onclick = async function() {
    gameStart.remove()
    let load = document.createElement("div")
    load.setAttribute("id", "load")
    let loadInner = document.createElement("div")
    loadInner.setAttribute("id", "loadInner")
    document.getElementById("gameDiv").appendChild(load)
    ctx.beginPath(); // Start a new path
    ctx.rect(0, 0, 1000, 1000); // Add a rectangle to the current path
    ctx.fill(); // Render the path
    await delay(Math.random()*(1200-200) + 600)
    load.appendChild(loadInner)
    await delay(Math.random()*(400-0) + 0)
    document.getElementById("loadInner").style.width = Math.random()*(117-77) + 77
    await delay(100)
    load.remove()
    ctx.fillStyle = "#353535"
    ctx.fillRect(0,0,1000,1000)


    let player = document.createElement("div")
    player.setAttribute("id", "player")
    const gameDiv = document.getElementById("gameDiv")
    document.body.insertBefore(player, gameDiv)
    for (let i=0;i<game1.length;i++) {
      game1.item(i).style.display = "block"
    }
    document.getElementById("key").style.display="inline"
}

up = false
right = false
down = false
left = false

let x = 694
let y = 2187
let speed = 2
let diagonalSpeed = 1.5
let defaultSpeed = speed
let previousX
let previousY
let colLeft
let colRight
let colUp
let colDown
let facing = "down"
let text = []
let items = []

if (localStorage.getItem("keycard") == "true") {
  console.log(true)
  items.push(collectibles[0].id)
      collectibles[0].remove()
      if (items.length == 1) {
        invInside.style.display = "grid"
        invInside.innerHTML = '<div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="keycard" class="item" src="icons/key.jpg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 0px solid rgb(122, 122, 122); width:120px; height:120px; margin: 15px; justify-self: center; display: flex;"></div>'
      }
      itemsHeld = document.getElementsByClassName("item")
        for (let i=0;i<itemsHeld.length;i++) {
          itemsHeld[i].addEventListener('mousedown', function (e) {
            drag(e, itemsHeld[i])
        })
        }
}


document.addEventListener('keydown', (event) => {
  const keyPressed = event.key; // Gets the string representation of the key (e.g., "Enter", "a", "ArrowUp")
  const keyCode = event.keyCode; // Gets the numeric key code (deprecated, but still commonly used for older browsers)


   if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || 
        event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        
        // Prevent the default scrolling behavior
        event.preventDefault();
    }
  // Example: Perform an action if the "Enter" key is pressed
  if (keyPressed === 'ArrowLeft') {
    left = true
    facing = "left"
  }
  if (keyPressed === 'ArrowRight') {
    right = true
    facing = "right"
  }
  if (keyPressed === 'ArrowUp') {
    up = true
    facing = "up"
  }
  if (keyPressed === 'ArrowDown') {
    down = true
    facing = "down"
  }
  if (keyPressed === 'z') {
    if (text.length < 1) {
      interactCheck()
    }
    if (text.length > 0) {
      textBox.children.item(0).innerHTML = text[0]
      text.shift()
      textBox.setAttribute("id", "text")
    }
    if (text.length == 0) {
      textBox.setAttribute("id", "textHidden")
    }
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



  // Example: Perform an action if the "Enter" key is pressed
  if (keyPressed === 'ArrowLeft') {
    left = false
    facing = "left"
  }
  if (keyPressed === 'ArrowRight') {
    right = false
    facing = "right"
  }
  if (keyPressed === 'ArrowUp') {
    up = false
    facing = "up"
  }
  if (keyPressed === 'ArrowDown') {
    down = false
    facing = "down"
  }
  

  if ((left == true || right == true) && (up == true || down == true)) {
    speed = diagonalSpeed
  } else {
    speed = defaultSpeed
  }
  // Example: Prevent default behavior (e.g., prevent form submission on Enter)

});

function collision(pixelAmountReturn) {
  let p = document.getElementById("player")
  for (let i = 0; i<walls.length; i++) {
    let wall = walls[i].getBoundingClientRect()
    let player = p.getBoundingClientRect()

    if (!(wall.right < player.left || wall.left > player.right || wall.bottom < player.top || wall.top > player.bottom)) {
      if ((wall.right > player.left) && (player.top < wall.bottom) && (player.bottom > wall.top) && (wall.right < player.right)) {
        colLeft = true
        colRight=false
        colUp=false
        colDown=false
        console.log("left")
        if (pixelAmountReturn == "left") {
          return wall.right
        }
        return true
      } else {
        colLeft = false
      }
      if ((wall.left < player.right) && (player.top < wall.bottom) && (player.bottom > wall.top) && (wall.left > player.left)){
        colRight = true
        colLeft=false
        colUp=false
        colDown=false
        console.log("right")
        if (pixelAmountReturn == "right") {
          return wall.left  - (player.right-player.left)
        }
        return true
      } else {
        colRight = false
      }
      if ((wall.bottom > player.top) && (player.right > wall.left) && (player.left < wall.right) && (wall.top < player.top)) {
        colUp = true
        colRight=false
        colLeft=false
        colDown=false
        console.log("up")
        if (pixelAmountReturn == "top") {
          return wall.bottom +1
        }
        return true
      } else {
        colUp = false
      }
      if ((wall.top < player.bottom) && (player.right > wall.left) && (player.left < wall.right)  && (wall.bottom > player.bottom)) {
        colDown = true
        colRight=false
        colUp=false
        colLeft=false
        console.log("down")
        if (pixelAmountReturn == "bottom") {
          return wall.top - (player.bottom-player.top) -1
        }
        return true
      } else {
        colDown = false
      }
      console.log("colliding")
      return true
    }
  }
  colLeft = false
  colRight = false
  colDown = false
  colUp = false
  return false
}

function collectibleCollision() {
  let p = document.getElementById("player")
  for (let i = 0; i<collectibles.length; i++) {
    let collect = collectibles[i].getBoundingClientRect()
    let player = p.getBoundingClientRect()

    if (!(collect.right < player.left || collect.left > player.right || collect.bottom < player.top || collect.top > player.bottom)) {
      items.push(collectibles[i].id)
      collectibles[i].style.animation = "fall 1s ease-in-out"
      if (items.length == 1) {
        invInside.style.display = "grid"

          localStorage.setItem("keycard", true)
        invInside.innerHTML = '<div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="keycard" class="item" src="icons/key.jpg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 0px solid rgb(122, 122, 122); width:120px; height:120px; margin: 15px; justify-self: center; display: flex;"></div>'
                itemsHeld = document.getElementsByClassName("item")
        for (let i=0;i<itemsHeld.length;i++) {
          itemsHeld[i].addEventListener('mousedown', function (e) {
            drag(e, itemsHeld[i])
        })
        }
      }
      
    }
}
}

function interactCheck() {
  let p = document.getElementById("player")
  let player = p.getBoundingClientRect()
  let xOff
  let yOff
  console.log(facing)


  if (facing == "left") {
    xOff = -20
    yOff = 0
  }
  if (facing == "right") {
    xOff = 20
    yOff = 0
  }
  if (facing == "up") {
    xOff = 0
    yOff = -20
  }
  if (facing == "down") {
    xOff = 0
    yOff = 20
  }

  for (let i = 0; i<interactables.length; i++) {
    let object = interactables[i].getBoundingClientRect()
    if (!(object.right < player.left + xOff || object.left > player.right + xOff || object.bottom < player.top + yOff || object.top > player.bottom + yOff)) {
      if (interactables[i].hasChildNodes()) {
        let children = interactables[i].children
        for (let j=0; j<children.length;j++) {
          if (children.item(j).nodeName == "P") {
            text.push(children.item(j).innerHTML)
          }
          
        }
        text.push("last")
      }

  }
}
}

function scrollWithPlayer() {
  let p = document.getElementById("player")
  let player = p.getBoundingClientRect()


  if (player.top<320) {
    window.scrollBy(0,-speed*2)
  }
  if (player.top>450) {
    window.scrollBy(0,speed)
  }
}


const gameloop = setInterval(() => {
      if (chatText.value.toLowerCase().includes("gaster")) {
        window.scrollTo(0,0)
      chatText.value = "                                                        "
      location.reload()
    }
  previousX = x
  previousY = y


    if (left) {
      if (!colLeft) {
        x -= speed
      }
    }
    if (right) {
        if (!colRight) {
        x += speed
      }
    }
    if (down) {
        if (!colDown) {
        y += speed
      }
    }
    if (up) {
        if (!colUp) {
        y -= speed
      }
    }

    

    let player = document.getElementById("player")
    if (player != null) {
    player.style.left = x + "px"
    player.style.top = y + "px"
    if (collision()) {
      x = previousX
      y = previousY
    }

      // if (colLeft) {
      //   x = collision("left")
      // }
      // if (colRight) {
      //   x = collision("right")
      // }
      // if (colUp) {
      //   y = collision("top") 
      // }
      // if (colDown) {
      //   y = collision("bottom") 
      // }

    
    player.style.left = x + "px"
    player.style.top = y + "px"
    collectibleCollision()
    if (left || right || down || up) {
      scrollWithPlayer()
    }
  }
    
    

}, 10);




// websiet junk
chatButton.onclick = function() {

    if (!(chatText.value == "" || chatText.value == null)) {
      invInside.innerHTML += "<div style='border: 0px solid white; width:100%; height:40%'><div style='float:right;margin:10px; background-color: rgb(77, 77, 77); width: 70%; height: 80%'><div style='margin:5px; background-color: rgb(77, 77, 77); width: 98%; height: 80%; color:whitesmoke'>" + chatText.value + "</div></div></div>"
      invInside.scrollTop = invInside.scrollHeight
      chatText.value = ''
    }
}

openInv.onclick = function() {
  if (inventory.style.bottom == "-360px") {
    inventory.style.bottom = "0px"
    inventory.style.animation = "invDown 0.35s ease-out"
    openInv.children[0].style.transform = "rotate(180deg)"
  } else {
    inventory.style.bottom = "-360px"
    inventory.style.animation = "invUp 0.7s ease-in"
    openInv.children[0].style.transform = "rotate(0deg)"
  }
}


function drag(e, draggable) {
  draggable.style.position = "absolute"
  orgSizeWidth = draggable.style.width
  orgSizeHeight = draggable.style.height
  draggable.style.width = "200px"
  draggable.style.height = "auto"
  startDragX = e.clientX
  startDragY = e.clientY
  console.log(draggable)
  e.preventDefault()
  orgLeft = draggable.style.left
  orgTop = draggable.style.top
let shiftX = e.clientX - draggable.getBoundingClientRect().left;
let shiftY = e.clientY - draggable.getBoundingClientRect().top;
draggable.style.left = (e.clientX-startDragX) + 'px';
    draggable.style.top = (e.clientY-startDragY+50) + 'px';

// Function to handle mouse movement
function onMouseMove(e) {
    draggable.style.left = (e.clientX-startDragX) + 'px';
    draggable.style.top = (e.clientY-startDragY+50) + 'px';
    console.log("move")
}
// Function to handle mouse release (end of drag)
function onMouseUp() {
    // Remove mousemove and mouseup listeners from the document
    draggable.style.left = orgLeft
    draggable.style.top = orgTop
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    draggable.style.position = "relative"
    draggable.style.width = orgSizeWidth
    draggable.style.height = orgSizeHeight
    console.log("down")
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
}

function reset() {
  localStorage.clear()
}
