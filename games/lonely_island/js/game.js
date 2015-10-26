// Navigates Title Screen, Help Screen, and Credit Screen
// Title Screen
$("#creditsButton").click(function () {
  $("#titleScreen").hide();
  $("#creditScreen").show();
});
$("#startButton").click(function () {
  $("#titleScreen").hide();
  main();
});
$("#helpButton").click(function () {
  $("#titleScreen").hide();
  $(".helpScreen").show();
});
// Credit Screen
$(".titleButton").click(function () {
  $("#creditScreen").hide();
  $("#titleScreen").show();
});
// Help Screen
$(".titleButton").click(function () {
  $(".helpScreen").hide();
  $("#titleScreen").show();
});

var gameOver = false;

// Game over
function gameOver() {
  console.log("Game is over!");
  gameOver = true;
}

// Keep track of score
var points = 0;

// Create the canvas and context
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
  bgReady = true;
};
bgImage.src = "images/background.png";

//Dino image
var dinoReady = false;
var dinoImage = new Image();
dinoImage.onload = function() {
  dinoReady = true;
};
dinoImage.src = "images/dino_spritesheet.png";


// NPC image
var npcReady = false;
var npcImage = new Image();
npcImage.onload = function() {
  npcReady = true;
};
npcImage.src = "images/egg.png";

// Tree Image
var treeReady = false;
var treeImage = new Image();
treeImage.onload = function() {
  treeReady = true;
};
treeImage.src = "images/tree.png";

var initTail = new TailLink(73, 46, "down");


// Game objects
var dino = {
  speed: 256,
  x: 50,
  y: 50,
  direction: "down", // up, down, left, right
  imageX: 0,
  imageY: 0,
  tail: initTail,
  setImageLocation: function (direction) {
    if (direction === "up") {
      this.imageX = 64;
      this.imageY = 0;
    } else if (direction === "right") {
      this.imageX = 32;
      this.imageY = 0;
    } else if (direction === "down") {
      this.imageX = 0;
      this.imageY = 0;
    } else if (direction === "left") {
      this.imageX = 138;
      this.imageY= 0;
    }
  }
};

// Linked List of tail links
function TailLink(x, y, direction) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.next_direction = direction;
  this.next;
}

TailLink.prototype.drawTailLink = function() {
  context.drawImage(npcImage, 0, 0, 32, 32, this.x, this.y, 20, 20);
  if (this.next) {
    this.next.drawTailLink();
  }
};

TailLink.prototype.updateLocation = function(direction, modifier) {
  this.direction = this.next_direction;
  this.next_direction=direction;
  if (this.direction === "down"){
      this.y += dino.speed*modifier;
      if (this.next) {this.next.updateLocation(direction, modifier);}
  } else if (this.direction === "up") {
      this.y -= dino.speed*modifier;
      if (this.next) {this.next.updateLocation(direction, modifier);}
  } else if (this.direction == "left") {
      this.x -= dino.speed*modifier;
      if (this.next) {this.next.updateLocation(direction, modifier);}
  } else if (this.direction == "right") {
      this.x += dino.speed*modifier;
      if (this.next) {this.next.updateLocation(direction, modifier);}
  }
  /*
  if (this.next) {
    if (this.direction === "down"){
      this.y += dino.speed*modifier;
      this.next.updateLocation(direction, modifier);
    } else if (this.direction === "up") {
      this.y -= dino.speed*modifier;
      this.next.updateLocation(direction, modifier);
    } else if (this.direction == "left") {
      this.x -= dino.speed*modifier;
      this.next.updateLocation(direction, modifier);
    } else if (this.direction == "right") {
      this.x += dino.speed*modifier;
      this.next.updateLocation(direction, modifier);
    }
  }
  */
};

TailLink.prototype.addTailLink = function() {
  if (!this.next) {// if tail.next is undefined
    if (this.direction === "down"){
      // add egg down
      this.next = new TailLink(this.x, this.y-20, this.direction);
    } else if (this.direction === "up") {
      this.next = new TailLink(this.x, this.y+20, this.direction);
    } else if (this.direction == "left") {
      this.next = new TailLink(this.x-20, this.y, this.direction);
    } else if (this.direction == "right") {
      this.next = new TailLink(this.x+20, this.y, this.direction);
    }
  } else {
    this.next.addTailLink();
  }
}

// NPC
function NPC(x,y) {
  this.x = x;
  this.y = y;
  this.imageX = 0;
  this.imageY = 0;
  this.imageWidth = 30;
  this.imageHeight = 30;
}

NPC.prototype.setImageProperties = function() {
  switch(characterNumber) {
    default:
      this.imageX = 0;
      this.imageY = 0;
      this.imageWidth = 30;
      this.imageHeight = 30;
  }
}

NPC.prototype.newLocation = function() {
  this.x = 32 + (Math.random() * (canvas.width - 64));
  this.y = 32 + (Math.random() * (canvas.height - 64));
}

var npc = new NPC(200, 100);

// Collection of trees
function Tree(x, y) {
  this.x = x;
  this.y = y;
}

var trees= [];

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown = {};
  keysDown[e.keyCode] = true;
}, false);

var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
    dino.direction = "up";
    dino.y -= dino.speed * modifier;
    dino.setImageLocation("up");
    dino.tail.updateLocation("up", modifier);
  }
  if (40 in keysDown) { // Player holding down
    dino.direction = "down";
    dino.y += dino.speed * modifier;
    dino.setImageLocation("down");
    dino.tail.updateLocation("down", modifier);
  }
  if (37 in keysDown) { // Player holding left
    dino.direction = "left";
    dino.x -= dino.speed * modifier;
    dino.setImageLocation("left");
    dino.tail.updateLocation("left", modifier);
  }
  if (39 in keysDown) { // Player holding right
    dino.direction = "right";
    dino.x += dino.speed * modifier;
    dino.setImageLocation("right");
    dino.tail.updateLocation("right", modifier);
  }

  // Collision detection
  // Detecting tree collision
  for (var i=0; i<trees.length; i++) {
    if (
      dino.x <= (trees[i].x + 20)
      && trees[i].x <= (dino.x + 20)
      && dino.y <= (trees[i].y + 20)
      && trees[i].y <= (dino.y + 20)
    ) {
     gameOver();
    }
  }
  // Detecting wall collision
  if (
    dino.x <= 0
    || dino.y <= 0
    || dino.x >= canvas.width - 32
    || dino.y >= canvas.height - 32
  ) {
    gameOver();
  }
  // Detecting NPC collision
  if (
    dino.x <= (npc.x + 32)
      && npc.x <= (dino.x + 32)
      && dino.y <= (npc.y + 32)
      && npc.y <= (dino.y + 32)
  ) {
    npc.newLocation();
    trees.push(new Tree(32 + (Math.random() * (canvas.width - 64)), 32 + (Math.random() * (canvas.height - 64))));
    dino.tail.addTailLink();
    points++;
    console.log(points);
  }
};

//Render Images
var render = function() {
  if (bgReady) {
    context.drawImage(bgImage, 0, 0);
  }

  if (dinoReady) {
    context.drawImage(dinoImage, dino.imageX, dino.imageY, 32, 32, dino.x, dino.y, 50, 50);
  }

  if (npcReady) {
    context.drawImage(npcImage, npc.imageX, npc.imageY, npc.imageWidth, npc.imageHeight, npc.x, npc.y, npc.imageWidth, npc.imageHeight)
    // Draw tail
    dino.tail.drawTailLink();
  }

  if (treeReady){
    for (var i=0; i < trees.length; i++) {
      context.drawImage(treeImage, 0, 0, 80, 100, trees[i].x, trees[i].y, 32, 32);
    }
  }

  // Draw score
  context.fillStyle = "black";
  context.font = "20px Sans-Serif";
  context.fillText("Score: " + points, 30, 50);
}

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now()


