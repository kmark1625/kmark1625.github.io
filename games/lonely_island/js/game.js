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

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
  heroReady = true;
};
heroImage.src = "images/main_character.png";

// Monster Image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
  monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var hero = {
  speed: 256,
  x: 50,
  y: 50,
  imageX: 0,
  imageY: 0,
  setImageLocation: function (direction) {
    if (direction === "up") {
      this.imageX = 0;
      this.imageY = 96;
    } else if (direction === "right") {
      this.imageX = 0;
      this.imageY = 64;
    } else if (direction === "down") {
      this.imageX = 0;
      this.imageY = 0;
    } else if (direction === "left") {
      this.imageX = 0;
      this.imageY= 32;
    }
  }
};

function Monster(x, y) {
  this.x = x;
  this.y = y;
}

// monsterArray = [new Monster(200, 200), new Monster(100,100)];

var monster = {
  x: 200,
  y: 200
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown = {};
  keysDown[e.keyCode] = true;
}, false);

var update = function (modifier) {
  if (38 in keysDown) { // Player holding up
    hero.y -= hero.speed * modifier;
    hero.setImageLocation("up");
  }
  if (40 in keysDown) { // Player holding down
    hero.y += hero.speed * modifier;
    hero.setImageLocation("down");
  }
  if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier
    hero.setImageLocation("left");
  }
  if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier
    hero.setImageLocation("right");
  }

  // Collision detection
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) { // Redraw the monster randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
  }
};

//Render Images
var render = function() {
  if (bgReady) {
    context.drawImage(bgImage, 0, 0);
  };

  if (heroReady) {
    context.drawImage(heroImage, hero.imageX, hero.imageY, 32, 32, hero.x, hero.y, 32, 32);
  };

  if (monsterReady){
    context.drawImage(monsterImage, 0, 0, 32, 32, monster.x, monster.y, 32, 32);
  };
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


