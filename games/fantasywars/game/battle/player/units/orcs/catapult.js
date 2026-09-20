Catapult.prototype = new UnitArtillery();
Catapult.prototype.constructor = Catapult;

function Catapult(pos, player) {
  this.pos = pos;
  this.player = player;
  this.useSheet("sprOrcs" + player, pos);
  this.animations.add("stand", ["50", "51"], 2);
  this.animations.add("move", ["52", "53"], 8);
  this.animations.add("attack", ["54", "55", "56", "57"], 8);
  this.animations.play("stand");
  this.fitToTile();
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("mortarShot");
  this.name = "Orc Catapult";
  this.health = 100;
  this.attack = 90;
  this.defense = 0.1;
  this.speed = 3;
  this.range = [3,4];
  this.cost = 500;
  this.player = player;
}
