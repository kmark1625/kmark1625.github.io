Mech.prototype = new UnitInfantry();
Mech.prototype.constructor = Mech;

function Mech(pos, player) {
  this.pos = pos;
  this.player = player;
  this.useSheet("sprDwarves" + player, pos);
  this.animations.add("stand", ["20", "21"], 2);
  this.animations.add("move", ["22", "23"], 8);
  this.animations.add("attack", ["24", "25", "26", "27"], 8);
  this.animations.play("stand");
  this.fitToTile();
  this.name = "Dwarf Mech"
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("cannonShot");
  this.health = 100;
  this.attack = 100;
  this.defense = 0.20;
  this.speed = 2;
  this.range = [1,2];
  this.cost = 200;
  this.player = player;
}
