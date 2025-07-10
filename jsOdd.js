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
const hoppers = document.getElementsByClassName("hopper")


// map arrays

// F = floor (no hitbox)
// >_ = transition room
// D = door
// H = stove
// X = chains
// S = stairs
// G = couch
// V = tv
// T = table (wall hitbox)
// W = wall
// C = chair
// R = leafces
// " " or "" = nothing (no sprite, has wall hitbox)
// N = note

// special map has interactions. first 2 numbers are its location, array has an array of text and the offset in pixels from its location
// to run a function on interaction: use a backtick ` then type the fuctnion. only allows one string argument. ex: `test(amognus)   (this will not show up nin text box, it will run immeditaly in the place of where it would have been in the text box)

//decor map spawns sprites



houseMap1 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", "F", "T", "T", "T", "T", "T", " ",
  " ", " ", " ", " ", " ", "F", "F", "T", "F", "F", "F", " ",
  " ", " ", " ", " ", " ", "F", "F", "F", "F", "F", "F", " ",
  " ", " ", " ", "", ">S1", "F", "F", "T", "T", "T", "F", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap1Decor = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", "F", "T2", "T2", "F", "T", "T", " ",
  " ", " ", " ", " ", " ", "F", "F", "C", "F", "F", "N", " ",
  " ", " ", " ", " ", " ", "F", "F", "F", "F", "F", "F", " ",
  " ", " ", " ", " ", "D", "F", "F", "T", "C", "C", "F", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
]
houseMap1Special = [
    [10,4, [["2 1 3"], 0, 0]],
]
houseMap1startX = 5.7
houseMap1startY = 6

houseMap2 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">B", " ", " ", " ", " ",
  " ", " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", ">R",
  " ", " ", " ", "F", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "F", "F", "F", ">F1", " ", " ", " ", " ", " ",
  " ", " ", " ", "F", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "T", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap2stage2 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">B", " ", " ", " ", " ",
  " ", " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", ">R",
  " ", " ", " ", "F", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "F", "F", "F", ">F1", " ", " ", " ", " ", " ",
  " ", " ", " ", "F", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "T", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap2Decor = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", "D", " ", " ", " ", " ",
  " ", " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", "D",
  " ", " ", " ", "F", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "F", "S", "S", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "F", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap2Special = [
    [7,1, [["`test('amongusss')", "the bathroom is locked."], 0, 0]],
    [3,6, [["you cannot continue further."], 0, 0]],
]
houseMap2startX = 10.5
houseMap2startY = 2
houseMap2startX1 = 10.5
houseMap2startY1 = 2
houseMap2startX2 = 5.5
houseMap2startY2 = 4
houseMap2startX3 = 7.6
houseMap2startY3 = 2


houseMap3 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", "T", " ", " ", " ", ">S2", "", " ", " ", "", " ",
  ">K", "F", "F", "F", "F", "F", "F", " ", " ", " ", " ", " ",
  ">K", "F", "F", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "T", "F", "F", "F", "F", "F", "F", "F", " ", " ", " ",
  " ", "T", "F", "T", "T", "T", "T", "F", "F", " ", " ", " ",
  " ", "T", "F", "F", "T", "F", "T", "T", "F", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap3Decor = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", "D", " ", " ", " ", "F", "", " ", " ", "", " ",
  " ", "F", "F", "S", "S", "S", "S", " ", " ", " ", " ", " ",
  " ", "F", "F", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "W", "F", "F", "F", "F", "N", "F", "F", " ", " ", " ",
  " ", "W", "F", "C", "T", "C", "G", "F", "F", "D", " ", " ",
  " ", "W", "F", "F", "C", "F", "G", "T", "F", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap3Special = [
    [2,2, [["# staff room # <br>",  "* please reply with passcode."], 0, 0]],
    [1,5, [["this texture is really funny can we keep it <br><br> -y"], 0, 0]],
    [1,6, [["this texture is really funny can we keep it <br><br> -y"], 0, 0]],
    [1,7, [["this texture is really funny can we keep it <br><br> -y"], 0, 0]],
    [6,5, [["these 3 wall blocks next to the stairs are the levers. make sure to make the sprites. i think the code is still in the room <br> -M"], 0, 0]],
    [3,4, [["`lever(1)"], -10, 0]],
    [4,4, [["`lever(2)"], 0, 0]],
    [5,4, [["`lever(3)"], 10, 0]],
]
houseMap3startX = 6.5
houseMap3startY = 3
houseMap3startX1 = 6.5
houseMap3startY1 = 3
houseMap3startX2 = 1.6
houseMap3startY2 = 3.5

houseMap4 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", "", "", ">F2", ">F2", "", "", "", "",
  "T", "T", "T", "T", "T", " ", "F", "F", " ", " ", " ", " ",
  "T", "F", "F", "F", "F", "T", "F", "F", "F", "F", "F", " ",
  "T", "F", "F", "F", "F", "F", "F", "F", "T", "F", "T", " ",
  "T", "F", "T", "T", "F", "F", "F", "F", "T", "F", "T", " ",
  "T", "F", "F", "F", "F", "T", "T", "F", "F", "F", "F", " ",
  "T", "F", "F", "F", "F", "T", "T", "F", "F", "T", "F", " ",
  "T", "T", "T", "T", " ", " ", " ", "T", " ", " ", " ", " "
  
]
houseMap4Decor = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", "", "", ">F2", ">F2", "", "", "", "",
  "T", "T", "8", "8", "T", "T", "F", "F", "W", "W", "W", " ",
  "T", "F", "F", "F", "F", "C", "F", "F", "F", "F", "F", " ",
  "H", "F", "F", "F", "F", "F", "F", "F", "G", "F", "V", " ",
  "H", "F", "T", "T", "F", "F", "F", "F", "G", "F", "V", " ",
  "T", "F", "F", "F", "F", "T", "T", "F", "F", "F", "F", " ",
  "T", "F", "F", "N", "F", "T", "T", "F", "F", "G", "F", " ",
  "T", "T", "T", "T", " ", " ", " ", "D", " ", " ", " ", " "
  
]
houseMap4Special = [
    [10,4, [["yummy."], 0, 20]],
    [7,8, [["are we making this area <br><br> -m"], 0, 0]],
    [2,2, [["you open the fridge.", "inside was the edgertron.", "`edgertron(load)",], 20, 0]],
    [3,7, [["bro can we please figure out interacting do you know how much it pisses me off that its just missing like half its functionality like dude  you cant even get to the end of a",], 0, 0]],
    [8,2, [["this texture is really funny can we keep it <br><br> -y"], 0, 0]],
    [9,2, [["this texture is really funny can we keep it <br><br> -y"], 0, 0]],
    [10,2, [["this texture is really funny can we keep it <br><br> -y"], 0, 0]],
]
houseMap4startX = 7.5
houseMap4startY = 2

houseMap5 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "P", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap5Decor = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "G", "G", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "G", "G", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "C", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap5Special = [
    [7,3, [["portal", "it is closed."], 0, 0]],
    
]
houseMap5startX = 7.6
houseMap5startY = 6

houseMap5  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "T", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", ">V", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "P", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap5Decor = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "P", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap5stage2  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", ">V", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "P", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap5stage2Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", ">F2", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "P", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]

houseMap5Special = [
    [7,2, [["portal", "it was closed.", "who added this? i thought we only had 4 rooms<br><br>-S"], 0, 0]],
    [6,3, [["this tile is called P in the files<br>it stands for poop<br>lol<br>-M"], 0, 0]],
    [6,5, [["you look through the mirror", "strangely, you cannot see yourself", "this is because i did not implement the mirror.", "-Y"], 0, 20]],
]
houseMap5stage2Special = [
    [6,3, [["*", "you flushed the toilet.", "the lunchly was unclogged.", "out of the basin runs thousands and thousands of groceries.", "thank you."], 0, 0]],
    [6,5, [["unfortunatley,", "you cannot see it."], 0, 20]],

]

houseMap5startX = 7.6
houseMap5startY = 6
houseMap5startX1 = 7.6
houseMap5startY1 = 6
houseMap5startX2 = 7.6
houseMap5startY2 = 3
houseMap5startXspecial = 7.6
houseMap5startYspecial = 5.5


houseMap6 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", " ", " ",
  " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", " ", " ",
  " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", " ", " ",
  " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", " ", " ",
  " ", " ", "F", "F", "F", "F", "F", "F", "F", "F", " ", " ",
  " ", " ", " ", "", "", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap6Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap6stage2Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", "J", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "J", ">F2", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "P", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "F", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", "T", "F", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", ">S3", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]

houseMap6Special = [
    [2,5, [["suddenly,", "the flute.", "`fluteCollect()",], 20, 0]],
]
houseMap6stage2Special = [
    
]
houseMap6startX = 7.6 
houseMap6startY = 6
houseMap6startX1 = 7.1
houseMap6startY1 = 6
houseMap6startX2 = 9
houseMap6startY2 = 4
houseMap6startX3 = 3.51
houseMap6startY3 = 2
houseMap6startX4 = 3.1
houseMap6startY4= 4

houseMap7 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "F", "T", "T", "T", "T", "F", "T", "T", "T", "T", " ",
  " ", "F", "F", "T", "T", "F", "F", "F", "T", "T", "T", " ",
  ">V2", "F", "F", "F", "F", "F", "F", "F", "F", "F", "T", " ",
  " ","F","F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap7Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "E", "R", "R", "R", "R", "E", "R", "R", "R", "R", " ",
  " ", "E", "E", "R", "R", "E", "E", "E", "R", "R", "R", " ",
  " ", "E", "E", "E", "E", "E", "E", "E", "E", "E", "R", " ",
  " ", "E", "E", "E", "E", "E", "T", "E", "E", "E", "E", " ",
  " ", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", " ",
  " ", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", " ",
  " ", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap7Special = [
    
]

houseMap7startX = 2.1
houseMap7startY = 3

houseMap8 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", ">V3",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap8Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap8Special = [
    
]

houseMap8startX = 10
houseMap8startY = 3

houseMap9 = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "T", "T", "T", "T", "T", "T", "T", "T", "T", "T", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", "F", "T", "F", "T", "F", "T", "F", "T", "F", "T", " ",
  " ", "F", "T", "F", "T", "F", "T", "F", "T", "F", "T", " ",
  " ", "F", "T", "F", "T", "F", "T", "F", "T", "F", "T", " ",
  " ", "F", "T", "F", "T", "F", "T", "F", "T", "F", "T", " ",
  " ", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", " ",
  " ", " ", " ", " ", ">V4", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap9Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", " ",
  " ", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", " ",
  " ", "K", "M", "K", "M", "K", "M", "K", "M", "K", "M", " ",
  " ", "K", "M", "K", "M", "K", "M", "K", "M", "K", "M", " ",
  " ", "K", "M", "K", "M", "K", "M", "K", "M", "K", "M", " ",
  " ", "K", "M", "K", "M", "K", "M", "K", "M", "K", "M", " ",
  " ", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap9Special = [
    
]

houseMap9startX = 4.51
houseMap9startY = 7.1

houseMap10 = [
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F",
  "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F"
  
]
houseMap10Decor  = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "
  
]
houseMap10Special = [
    [5,4, [["you got the keycard.", "`keycard2()",], 20, 0]],
    [4,4, [["you got the keycard.", "`keycard2()",], 20, 0]],
    [6,4, [["you got the keycard.", "`keycard2()",], 20, 0]],
]

houseMap10startX = 4.51
houseMap10startY = 7.1



let number1Found = false
let number2Found = false
let number3Found = false
let staffUnlocked = false

// get current houseMap
let curHouse = houseMap1

textureMap = {
  "F" : "textures/floor.png",
  "T" : "textures/table.png",
  "T2": "textures/table2.png",
  "W" : "textures/wall.png",
  "G" : "textures/couch.png",
  "8" : "textures/fridge.png",
  "D" : "textures/door.png",
  "V" : "textures/tv.png",
  "S" : "textures/stairs.png",
  "X" : "textures/X.png",
  "C" : "textures/chair.png",
  "H" : "textures/stove.png",
  "N" : "textures/note.png",
  "J" : "textures/shower.png",
  "P" : "textures/toilet.png",
  "E" : "textures/grass.png",
  "R" : "textures/leaf.png",
  "Z" : "textures/water.png",
  "Y" : "textures/fridge_small.png",
  "M" : "textures/shelf.png",
  "K" : "textures/tile.png",
  "": "textures/resources.png",
  " ": "textures/resources.png",
  ">S1": "textures/door.png",
  ">S2": "textures/resources.png",
  ">S3": "textures/door.png",
  ">F2": "textures/resources.png",
  ">F1": "textures/floor.png",
  ">K": "textures/resources.png",
  ">R": "textures/door.png",
  
}


function edgertron(id) {
  console.log(id)
    if (id == "load" && document.getElementById("edgertron") === null) {
      let newDiv = document.createElement("div")
      newDiv.style.position = "absolute"
      newDiv.style.top = "50100px"
      newDiv.style.left = "100px"
      newDiv.id = "edgertron"
      let img = document.createElement("img")
      img.src = "icons/edgertron.png"
      img.style.width = "400px"
      img.style.height = "400px"
      img.href
      let a = document.createElement("a")
      a.href = "edgertron-specifications.html"
      a.target = "_blank"
      a.appendChild(img)
      newDiv.appendChild(a)
      document.body.insertBefore(newDiv, gameDiv)
      console.log("edged")

    }
}

function fluteCollect() {
    if (document.getElementById("flute") === null) {
      let newDiv = document.createElement("div")
      newDiv.style.position = "absolute"
      newDiv.style.top = "50150px"
      newDiv.style.right = "200px"
      newDiv.id = "flute"
      let img = document.createElement("img")
      img.src = "icons/flutebetter.png"
      img.style.width = "100px"
      img.style.height = "300px"
      img.href
      let a = document.createElement("a")
      a.href = "skib-on-energy.html"
      a.target = "_blank"
      a.appendChild(img)
      newDiv.appendChild(a)
      document.body.insertBefore(newDiv, gameDiv)

    }
}

let levers = [0,0,0]
let leversDone = false
function lever(id) {
  console.log(levers)
if (leversDone == false) {
  if (id == "2" && levers[0] == 0 && levers[1] == 0 && levers[2] == 0) {
    levers = [0,1,0]
    console.log("stage 1")
  } else if (id == "1" && levers[0] == 0 && levers[1] == 1 && levers[2] == 0) {
    levers = [1,1,0]
    console.log("stage 2")
  } else if (id == "3" && levers[0] == 1 && levers[1] == 1 && levers[2] == 0) {
    levers = [1,1,1]
    console.log("finished")
    leversDone = true
   setTimeout(() => {
    sendText("the bathroom is now unlocked.")
    houseMap2 = houseMap2stage2
   }, 100);
    
  } else {
    levers = [0,0,0]


  }
}
}

function sendText(textString) {
  text.push(textString)
  textBox.children.item(0).innerHTML = text[0]
  text.shift()
  textBox.setAttribute("id", "text")
}

let scubCounter = 0
function scubMirror(text) {
  //only runs in bathroom. scb counter 4 is to stop from running again
  if (curHouse == houseMap5 && scubCounter != 4) {

    text = text.toLowerCase()
    if (text == "scub" || text == "scub fatlart") {
      scubCounter++
      console.log("scub level: " + scubCounter )
    } else {
      scubCounter = 0
      console.log("scubbed out")
    }

    if (scubCounter == 3) {
      scubCounter = 4
      houseMap5 = houseMap5stage2
      houseMap5Decor = houseMap5stage2Decor
      houseMap5Special = houseMap5stage2Special
      houseMap5startY = houseMap5startYspecial
      facing = "up"
      sendText("it was scubbed.")
      gameUnload()
      gameLoad(houseMap5, 56)
    }

  }
}

function passwordStaff(text = "nil", size) {
  if ((text == "413237" && curHouse==houseMap3) || staffUnlocked) {
    sendText("the door was unlocked.")
    facing = "down"
    let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = 2*size + 588
      newDiv.style.top = 2*size + 50058
      newDiv.style.position = "absolute"
      newDiv.style.backgroundColor = "purple"
      newDiv.setAttribute("class", "housemap transition houseMap10")
      // id is where to transition to
      newDiv.setAttribute("id", "houseMap10")
      document.body.insertBefore(newDiv, gameDiv)

      staffUnlocked = true

  }
}

function makeDoor(size) {
  console.log("running")
  if (localStorage.getItem("secretRight") == "true") {
    console.log("secret right")
    let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = 10*size + 584
      newDiv.style.top = 4*size + 50055
      newDiv.style.position = "absolute"
      newDiv.style.backgroundColor = "purple"
      newDiv.setAttribute("class", "housemap transition secretRight")
      // id is where to transition to
      newDiv.setAttribute("id", "houseMap7")
      document.body.insertBefore(newDiv, gameDiv)
  } 
  if (localStorage.getItem("secretLeft") == "true") {
    console.log("secret left")
    let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = 1*size + 593
      newDiv.style.top = 4*size + 50055
      newDiv.style.position = "absolute"
      newDiv.style.backgroundColor = "purple"
      newDiv.setAttribute("class", "housemap transition secretLeft")
      // id is where to transition to
      newDiv.setAttribute("id", "houseMap8")
      document.body.insertBefore(newDiv, gameDiv)
  } 
  if (localStorage.getItem("secretUp") == "true") {
    console.log("secret up")
    let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = 3*size + 588
      newDiv.style.top = 1*size + 50060
      newDiv.style.position = "absolute"
      newDiv.style.backgroundColor = "purple"
      newDiv.setAttribute("class", "housemap transition secretUp")
      // id is where to transition to
      newDiv.setAttribute("id", "houseMap9")
      document.body.insertBefore(newDiv, gameDiv)
  } if (localStorage.getItem("secretDown") == "true") {
    console.log("secret down")
    let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = 7*size + 588
      newDiv.style.top = 7*size + 50050
      newDiv.style.position = "absolute"
      newDiv.style.backgroundColor = "purple"
      newDiv.setAttribute("class", "housemap transition secretDown")
      // id is where to transition to
      newDiv.setAttribute("id", "houseMap5")
      document.body.insertBefore(newDiv, gameDiv)
  } 
}

function makeNewDivForNumber(number, x) {
  let newDiv3 = document.createElement("div")
        newDiv3.style.width = 200
        newDiv3.style.height = 140
        newDiv3.style.left = 588 + x - 55
        newDiv3.style.top = 50625 - 410
        newDiv3.style.position = "absolute"
        newDiv3.style.zIndex = "3"
        newDiv3.setAttribute("class", "houseMap")
        newDiv3.setAttribute("id", "numberPicture")
        let newDiv4 = document.createElement("p")
        newDiv4.style.position = "absolute"
        newDiv4.innerHTML = number
        newDiv4.style.fontSize = "50"
        newDiv4.style.color = "gray"
        newDiv4.style.zIndex = "3"
        newDiv4.setAttribute("class", "houseMap")
        newDiv4.setAttribute("id", "numberPictue1")
        newDiv3.appendChild(newDiv4)
        document.body.insertBefore(newDiv3, gameDiv)
}

let keycard2collected = false
function keycard2() {
  document.getElementById("keycard2").src = "textures/keycardHighlight2.png"
  keycard2collected = true
}

function haff() {
  if (keycard2collected) {
    let keyAnim = document.createElement("img")
      keyAnim.src = "icons/key.jpg"
      keyAnim.style = "position:absolute; width:250px; height:auto; transform: rotate(90deg); left:570px;top: 100px; animation: 1s keycardUp ease-out; z-index: -5"
      document.body.insertBefore(keyAnim, gameDiv)
      localStorage.setItem("act2", true)
  }
}



//function to allow script to delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

ctx.fillStyle = "#0f0f0f"
ctx.fillRect(0,0,1000,1000)

//player junkj
gameStart.onclick = async function() {
    //loading screen
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


    //load player
    let player = document.createElement("div")
    player.setAttribute("id", "player")
    const gameDiv = document.getElementById("gameDiv")
    document.body.insertBefore(player, gameDiv)
    player.style.top += 50000
    for (let i=0;i<game1.length;i++) {
      game1.item(i).style.display = "block"
    }

    //load house map 1
    gameLoad(houseMap1, 56)
}

let x = 1094
let y = 50187

function gameLoad(map, size) {
  let mapx = 0
  let mapy = 0
  curHouse = map
  //iterate through array and make map based on it
    for (let i=0; i<map.length;i++) {
      
      //make div and default to wall
      let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = mapx + 588
      newDiv.style.top = mapy + 50055
      newDiv.style.position = "absolute"
      newDiv.style.backgroundColor = "black"
      newDiv.setAttribute("class", "wall")

      //check if its not supposed to be a wall and change the values accordingly
      if (map[i] == "F") {
        newDiv.style.backgroundColor = "gray"
        //remove class to rfemove floor collision
        newDiv.setAttribute("class", "")
      } else if (map[i] == ">S1") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap2startX = houseMap2startX1
        houseMap2startY = houseMap2startY1
        // id is where to transition to
        newDiv.setAttribute("id", "houseMap2")
      } else if (map[i] == ">S2") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap2startX = houseMap2startX2
        houseMap2startY = houseMap2startY2
        // id is where to transition to
        newDiv.setAttribute("id", "houseMap2")
      } else if (map[i] == ">R") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        // id is where to transition to
        newDiv.setAttribute("id", "houseMap1")
      } else if (map[i] == "T") {
        // placeholder for furniture T= table
        newDiv.style.backgroundColor = "orange"
      } else if (map[i] == ">F1") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap3startX = houseMap3startX1
        houseMap3startY = houseMap3startY1
        // id is where to transition to
        newDiv.setAttribute("id", "houseMap3")
      } else if (map[i] == ">F2") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap3startX = houseMap3startX2
        houseMap3startY = houseMap3startY2
        // id is where to transition to
        newDiv.setAttribute("id", "houseMap3")
      } else if (map[i] == ">K") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap4")
      } else if (map[i] == ">B") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap5startY = houseMap5startY1

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap5")
      } else if (map[i] == ">S3") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap2startX = houseMap2startX3
        houseMap2startY = houseMap2startY3

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap2")
      } else if (map[i] == ">V") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap6startX = houseMap6startX1
        houseMap6startY = houseMap6startY1

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap6")
      } else if (map[i] == ">B2") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap5startY = houseMap5startY2

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap5")
      }
       else if (map[i] == ">V2") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap6startX = houseMap6startX2
        houseMap6startY = houseMap6startY2

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap6")
      }else if (map[i] == ">V3") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap6startX = houseMap6startX4
        houseMap6startY = houseMap6startY4

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap6")
      }else if (map[i] == ">V4") {
        newDiv.style.backgroundColor = "purple"
        newDiv.setAttribute("class", "transition")
        houseMap6startX = houseMap6startX3
        houseMap6startY = houseMap6startY3

        // id is where to transition to
        newDiv.setAttribute("id", "houseMap6")
      }
      
      
      // this is to know what ellements to unload
      if (map == houseMap1) {
        newDiv.classList.add("houseMap")
        x = houseMap1startX*size
        y = houseMap1startY*size
        y += 50060
        x += 560
        interactLoad(houseMap1Special, mapx, mapy, size)

      } else if (map == houseMap2) {
        newDiv.classList.add("houseMap")
        x = houseMap2startX*size
        y = houseMap2startY*size
        y += 50060
        x += 560
        interactLoad(houseMap2Special, mapx, mapy, size)

      } else if (map == houseMap3) {
        newDiv.classList.add("houseMap")
        x = houseMap3startX*size
        y = houseMap3startY*size
        y += 50060
        x += 560
        interactLoad(houseMap3Special, mapx, mapy, size)
        

      }  else if (map == houseMap4) {
        newDiv.classList.add("houseMap")
        x = houseMap4startX*size
        y = houseMap4startY*size
        y += 50060
        x += 560
        interactLoad(houseMap4Special, mapx, mapy, size)

      }  else if (map == houseMap5) {
        newDiv.classList.add("houseMap")
        x = houseMap5startX*size
        y = houseMap5startY*size
        y += 50060
        x += 560
        interactLoad(houseMap5Special, mapx, mapy, size)

      }   else if (map == houseMap6) {
        newDiv.classList.add("houseMap")
        x = houseMap6startX*size
        y = houseMap6startY*size
        y += 50060
        x += 560
        interactLoad(houseMap6Special, mapx, mapy, size)

        if (document.getElementById("numberPicture") == null) {
          makeNewDivForNumber("#", 200)
          makeNewDivForNumber("#", 270)
          makeNewDivForNumber("#", 340)
          
          if (number1Found) {
          makeNewDivForNumber("2", 410)
          }
          if (number2Found) {
          makeNewDivForNumber("3", 480)
          }
          if (number3Found) {
          makeNewDivForNumber("7", 530)
          }
        }


      }   else if (map == houseMap7) {
        newDiv.classList.add("houseMap")
        x = houseMap7startX*size
        y = houseMap7startY*size
        y += 50060
        x += 560
        interactLoad(houseMap7Special, mapx, mapy, size)
        if (Math.round(mapx/size) == 6 && Math.round(mapy/size) == 4) {
          console.log("camera")
        let newDiv2 = document.createElement("div")
        newDiv2.style.width = size*1.5
        newDiv2.style.height = size*1.5
        newDiv2.style.left = mapx + 588
        newDiv2.style.top = mapy + 50055
        newDiv2.style.position = "absolute"
        newDiv2.style.opacity = "0%"
        newDiv2.style.backgroundColor = "red"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "hopper houseMap")
        newDiv2.setAttribute("id", "scubDead")
        document.body.insertBefore(newDiv2, gameDiv)
        }
        if (localStorage.getItem("camera") != "true") {
        if (Math.round(mapx/size) == 8 && Math.round(mapy/size) == 4) {
          console.log("camera")
        let newDiv2 = document.createElement("img")
        newDiv2.style.width = size*1.5
        newDiv2.style.height = size*1.5
        newDiv2.style.left = mapx + 588
        newDiv2.style.top = mapy + 50625
        newDiv2.style.position = "absolute"
        newDiv2.src = "icons/camera.jpeg"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "collect houseMap")
        newDiv2.setAttribute("id", "camera")
        document.body.insertBefore(newDiv2, gameDiv)
        }
      }


      }   else if (map == houseMap8) {
        newDiv.classList.add("houseMap")
        x = houseMap8startX*size
        y = houseMap8startY*size
        y += 50060
        x += 560
        interactLoad(houseMap8Special, mapx, mapy, size)
        if (Math.round(mapx/size) == 2 && Math.round(mapy/size) == 0 && number3Found == false) {
        let newDiv2 = document.createElement("div")
        newDiv2.style.width = size*8
        newDiv2.style.height = size*8
        newDiv2.style.left = mapx + 588
        newDiv2.style.top = mapy + 50055
        newDiv2.style.position = "absolute"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "hopper houseMap")
        newDiv2.setAttribute("id", "whatsapp")
        let newimg2 = document.createElement("img")
        newimg2.style.width = "100%"
        newimg2.style.height = "100%"
        newimg2.style.zIndex = "3"
        newimg2.src= "textures/superscary.png"
        newDiv2.appendChild(newimg2)
        document.body.insertBefore(newDiv2, gameDiv)
        }

      }   else if (map == houseMap9) {
        newDiv.classList.add("houseMap")
        x = houseMap9startX*size
        y = houseMap9startY*size
        y += 50060
        x += 560
        interactLoad(houseMap9Special, mapx, mapy, size)
        if (Math.round(mapx/size) == 9 && Math.round(mapy/size) == 1) {
        let newDiv2 = document.createElement("div")
        newDiv2.style.width = size
        newDiv2.style.height = size
        newDiv2.style.left = mapx + 588
        newDiv2.style.top = mapy + 50055
        newDiv2.style.position = "absolute"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "hopper houseMap")
        newDiv2.setAttribute("id", "lunchly")
        let newimg2 = document.createElement("img")
        newimg2.style.width = "100%"
        newimg2.style.height = "100%"
        newimg2.style.zIndex = "3"
        newimg2.src= "textures/lunchly.png"
        newDiv2.appendChild(newimg2)
        document.body.insertBefore(newDiv2, gameDiv)
        }


      } else if (map == houseMap10) {
        newDiv.classList.add("houseMap")
        x = houseMap10startX*size
        y = houseMap10startY*size
        y += 50060
        x += 560
        interactLoad(houseMap10Special, mapx, mapy, size)

        if (Math.round(mapx/size) == 2 && Math.round(mapy/size) == 0) {
        let newDiv2 = document.createElement("div")
        newDiv2.style.width = size*6
        newDiv2.style.height = size*6
        newDiv2.style.left = mapx + 588
        newDiv2.style.top = mapy + 50055
        newDiv2.style.position = "absolute"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "hopper houseMap")
        newDiv2.setAttribute("id", "keycard2")
        let newimg2 = document.createElement("img")
        newimg2.style.width = "100%"
        newimg2.style.height = "100%"
        newimg2.style.zIndex = "3"
        newimg2.src= "textures/keycardHighlight.png"
        newDiv2.appendChild(newimg2)
        document.body.insertBefore(newDiv2, gameDiv)
        }
      }

            

      
      
      //insert map and iterate x and y
      document.body.insertBefore(newDiv, gameDiv)
      mapx += size
      if ((mapx/size) > 11) {
        mapx = 0
        mapy += size
      }
    }

    // load sprite based on map
    if (map == houseMap1) {
      spriteLoad(houseMap1Decor, size)
    } else if (map == houseMap2) {
      spriteLoad(houseMap2Decor, size)
      interactLoad(houseMap2Special, size)
    } else if (map == houseMap3) {
      spriteLoad(houseMap3Decor, size)
      passwordStaff("nil", size)
    }  else if (map == houseMap4) {
      spriteLoad(houseMap4Decor, size)
    }  else if (map == houseMap5) {
      spriteLoad(houseMap5Decor, size)
    } else if (map == houseMap6) {
      makeDoor(size)
      spriteLoad(houseMap6Decor, size)
    } else if (map == houseMap7) {
      spriteLoad(houseMap7Decor, size)
    } else if (map == houseMap8) {
      spriteLoad(houseMap8Decor, size)
    } else if (map == houseMap9) {
      spriteLoad(houseMap9Decor, size)
    }
  
}

function spriteLoad(map, size) {
  let mapx = 0
  let mapy = 0
  //iterate through array and make map based on it
    for (let i=0; i<map.length;i++) {
      if (map[i] != "" && map[i] != " ") {
      //make div and default to wall
      let newImg = document.createElement("img")
      newImg.style.width = size
      newImg.style.height = size
      newImg.style.left = mapx + 588
      newImg.style.top = mapy + 50055
      newImg.style.position = "absolute"
      newImg.classList.add("houseMap")


        // console.log("// missing tile texture for: " + map[i])
        newImg.src = textureMap[map[i]]
      
      
        

      


      
      //insert map and iterate x and y
      document.body.insertBefore(newImg, gameDiv)
      }
      mapx += size
      if ((mapx/size) > 11) {
        mapx = 0
        mapy += size
      }
    }
}

function interactLoad(map, mapx, mapy, size) {
  for (let i=0; i<map.length;i++) {
    
    if (mapx/size == map[i][0] && mapy/size == map[i][1]) {
      console.log(size, mapx, mapy)
      let newDiv = document.createElement("div")
      newDiv.style.width = size
      newDiv.style.height = size
      newDiv.style.left = mapx + 588 + map[i][2][1]
      newDiv.style.top = mapy + 50055 + map[i][2][2]
      newDiv.style.position = "absolute"
      newDiv.style.opacity = "0%"
      for (let j=0; j<map[i][2][0].length;j++) {
          newDiv.innerHTML += "<p>" + map[i][2][0][j] + "</p>"
      }

      newDiv.setAttribute("class", "interact houseMap")

      document.body.insertBefore(newDiv, gameDiv)
    }
}
}

function gameUnload() {
  let houseToUnload = document.getElementsByClassName("houseMap")
        let leng = houseToUnload.length
        for (let j=0; j<leng;j++) {
          houseToUnload[0].remove()
  }
}


up = false
right = false
down = false
left = false


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


//get save game
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
if (localStorage.getItem("camera") == "true") {
  items = ["key", "camera"]
          invInside.style.display = "grid"


          localStorage.setItem("camera", true)
        invInside.innerHTML = '<div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="keycard" class="item" src="icons/key.jpg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="camera" class="item" src="icons/camera.jpeg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 0px solid rgb(122, 122, 122); width:120px; height:120px; margin: 15px; justify-self: center; display: flex;"></div>'

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
  if (textBox.getAttribute("id") == "textHidden") {
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
    if (textBox.getAttribute("id") == "textHidden") {
    facing = "left"
    }
  }
  if (keyPressed === 'ArrowRight') {
    right = false
    if (textBox.getAttribute("id") == "textHidden") {
    facing = "right"
    }
  }
  if (keyPressed === 'ArrowUp') {
    up = false
    if (textBox.getAttribute("id") == "textHidden") {
    facing = "up"
    }
  }
  if (keyPressed === 'ArrowDown') {
    down = false
    if (textBox.getAttribute("id") == "textHidden") {
    facing = "down"
    }
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
        // console.log("left")
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
        // console.log("right")
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
        // console.log("up")
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
        // console.log("down")
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
      setTimeout(() => {
        console.log(collectibles[i])
        collectibles[i].remove()
      }, 950);
      if (items.length == 1) {
        invInside.style.display = "grid"
        text.push("keycard has been added to your inventory.")
        textBox.children.item(0).innerHTML = text[0]
        text.shift()
        textBox.setAttribute("id", "text")

          localStorage.setItem("keycard", true)
        invInside.innerHTML = '<div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="keycard" class="item" src="icons/key.jpg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 0px solid rgb(122, 122, 122); width:120px; height:120px; margin: 15px; justify-self: center; display: flex;"></div>'
                
        
      } if (items.length > 1) {
        items = ["key", "camera"]
          invInside.style.display = "grid"
        text.push("camera has been added to your inventory.")
        textBox.children.item(0).innerHTML = text[0]
        text.shift()
        textBox.setAttribute("id", "text")

          localStorage.setItem("camera", true)
        invInside.innerHTML = '<div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="keycard" class="item" src="icons/key.jpg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 2px solid rgb(122, 122, 122); width:120px; height:120px; padding:10px; margin: 15px; justify-self: center; display: flex;"><img id="camera" class="item" src="icons/camera.jpeg" style="width:100%; height:60%; transform: rotate(-6deg);  align-self: center;"></div><div style="border: 0px solid rgb(122, 122, 122); width:120px; height:120px; margin: 15px; justify-self: center; display: flex;"></div>'
      }
      itemsHeld = document.getElementsByClassName("item")
      for (let i=0;i<itemsHeld.length;i++) {
          itemsHeld[i].addEventListener('mousedown', function (e) {
            drag(e, itemsHeld[i])
        })
        }
      
    }
}
}

function transitionCollision() {
  let transitionList = document.getElementsByClassName("transition")
  let p = document.getElementById("player")
  for (let i = 0; i<transitionList.length; i++) {
    let transition = transitionList[i].getBoundingClientRect()
    let player = p.getBoundingClientRect()

    if (!(transition.right < player.left || transition.left > player.right || transition.bottom < player.top || transition.top > player.bottom)) {
      if (transitionList[i].id == "houseMap2") {
        gameUnload()
        gameLoad(houseMap2, 56)
      } else if (transitionList[i].id == "houseMap1") {
        gameUnload()
        gameLoad(houseMap1, 56)
      } else if (transitionList[i].id == "houseMap3") {
        gameUnload()
        gameLoad(houseMap3, 56)
      } else if (transitionList[i].id == "houseMap4") {
        gameUnload()
        gameLoad(houseMap4, 56)
      } else if (transitionList[i].id == "houseMap5") {
        gameUnload()
        gameLoad(houseMap5, 56)
      }  else if (transitionList[i].id == "houseMap6") {
        gameUnload()
        gameLoad(houseMap6, 56)
      }  else if (transitionList[i].id == "houseMap7") {
        gameUnload()
        gameLoad(houseMap7, 56)
      }  else if (transitionList[i].id == "houseMap8") {
        gameUnload()
        gameLoad(houseMap8, 56)
      }  else if (transitionList[i].id == "houseMap9") {
        gameUnload()
        gameLoad(houseMap9, 56)
      }  else if (transitionList[i].id == "houseMap10") {
        gameUnload()
        gameLoad(houseMap10, 56)
      }
      
    }
}
}

function interactCheck() {
  let p = document.getElementById("player")
  let player = p.getBoundingClientRect()
  let xOff
  let yOff
  // console.log(facing)


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
            if (children.item(j).innerHTML[0] == "`") {
              let func = children.item(j).innerHTML.substring(1, children.item(j).innerHTML.indexOf("("))
              let arg = children.item(j).innerHTML.substring(children.item(j).innerHTML.indexOf("(")+1, children.item(j).innerHTML.indexOf(")"))
              window[func](arg)
              console.log(func + "(" + arg + ")")
              continue
            }
            text.push(children.item(j).innerHTML)
          }
          
        }
        text.push("last")
        return
      }

  }
}
}

function test(arg) {
  console.log(arg)
}

function scrollWithPlayer() {
  let p = document.getElementById("player")
  let player = p.getBoundingClientRect()


  if (player.top<220) {
    window.scrollBy(0,-speed*2)
  }
  if (player.top>650) {
    window.scrollBy(0,speed)
  }
}


const gameloop = setInterval(() => {
      if (chatText.value.toLowerCase().includes("gaster")) {
        window.scrollTo(0,0)
      chatText.value = "                                                        "
      location.reload()
    }
  
    if (text.length<1) {
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
    transitionCollision()
    if (left || right || down || up) {
      scrollWithPlayer()
    }
  }
  }
  

  if (curHouse == houseMap6) {
  
    if (document.getElementsByClassName("secretLeft").length == 0 && localStorage.getItem("secretLeft") == "true") {
        makeDoor(56)
    }
    if (document.getElementsByClassName("secretDown").length == 0 && localStorage.getItem("secretDown") == "true") {
        makeDoor(56)
    }
    if (document.getElementsByClassName("secretUp").length == 0 && localStorage.getItem("secretUp") == "true") {
        makeDoor(56)
    }
    if (document.getElementsByClassName("secretRight").length == 0 && localStorage.getItem("secretRight") == "true") {
        makeDoor(56)
    }
 
  }
    

}, 10);




// websiet junk
chatButton.onclick = function() {

    if (!(chatText.value == "" || chatText.value == null)) {
      scubMirror(chatText.value)
      passwordStaff(chatText.value, 56)
    }
    chatText.value = ''
}

openInv.onclick = function() {
  if (inventory.style.bottom == "-360px") {
    inventory.style.bottom = "0px"
    inventory.style.animation = "chatboxFall 5s ease-out"
    openInv.children[0].style.transform = "rotate(180deg)"
    setTimeout(() => {
      gameDiv.style.display="flex"
      inventory.style.animation = ""
      inventory.style.position = "absolute"
      inventory.style.bottom = "-50000px"
      inventory.style.right = "42px"
      inventory.style.transform = "rotate(13deg)"

    }, 1000);
    
  }
}


let keycarded = false

function drag(e, draggable) {
  // configure tiem to look bigger and draggable
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
    // detect hitboxes on release: checks every element
    for (let i=0; i<hoppers.length;i++) {
      let object = document.getElementsByClassName("hopper")[i].getBoundingClientRect()

      let curItem = draggable.getBoundingClientRect()
      if (!(object.right < curItem.left || object.left > curItem.right || object.bottom < curItem.top || object.top > curItem.bottom)) {
        checkItemInteract(draggable, document.getElementsByClassName("hopper")[i])
      }
    }

    // reset item image
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

// reset save
function reset() {
  localStorage.clear()
}

function checkItemInteract(item, object){
  if (object.id == "scubDead" && item.id == "camera") {
    let newDiv2 = document.createElement("img")
        newDiv2.style.width = 200
        newDiv2.style.height = 140
        newDiv2.style.left = 588 + 280
        newDiv2.style.top = 50625 - 400
        newDiv2.style.position = "absolute"
        newDiv2.src = "textures/numberPic1.png"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "houseMap")
        newDiv2.setAttribute("id", "numberPictue1")
        document.body.insertBefore(newDiv2, gameDiv)
        number1Found = true
  }
  if (object.id == "lunchly" && item.id == "camera") {
    let newDiv2 = document.createElement("img")
        newDiv2.style.width = 200
        newDiv2.style.height = 140
        newDiv2.style.left = 588 + 430
        newDiv2.style.top = 50625 - 560
        newDiv2.style.position = "absolute"
        newDiv2.src = "textures/numberPic2.png"
        newDiv2.style.zIndex = "3"
        newDiv2.setAttribute("class", "houseMap")
        newDiv2.setAttribute("id", "numberPictue1")
        document.body.insertBefore(newDiv2, gameDiv)
        number2Found = true
  }
  if (object.id == "whatsapp" && item.id == "camera") {
    let newDiv2 = document.createElement("img")
        newDiv2.style.width = 200
        newDiv2.style.height = 140
        newDiv2.style.left = 588 + 230
        newDiv2.style.top = 50625 - 400
        newDiv2.style.position = "absolute"
        newDiv2.src = "textures/numberPic3.png"
        newDiv2.style.zIndex = "2"
        newDiv2.setAttribute("class", "houseMap")
        newDiv2.setAttribute("id", "numberPictue1")
        document.getElementById("whatsapp").remove()
        document.body.insertBefore(newDiv2, gameDiv)
        number3Found = true
  }
}
