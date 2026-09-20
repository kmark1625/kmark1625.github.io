IronGuard.prototype = new UnitInfantry();
IronGuard.prototype.constructor = IronGuard;

function IronGuard(pos, player) {
  this.pos = pos;
  this.player = player;
  this.useSheet("sprDwarves" + player, pos);
  this.animations.add("stand", ["30", "31"], 2);
  this.animations.add("move", ["32", "33"], 8);
  this.animations.add("attack", ["34"], 8);
  this.animations.play("stand");
  this.fitToTile();
  this.name = "Dwarf IronGuard";
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.health = 100;
  this.attack = 75;
  this.defense = 0.40;
  this.speed = 3;
  this.range = [1,1];
  this.cost = 400;
  this.player = player;
}
