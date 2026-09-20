SilverLancer.prototype = new UnitCavalry();
SilverLancer.prototype.constructor = SilverLancer;

function SilverLancer(pos, player) {
  this.pos = pos;
  this.player = player;
  this.useSheet("sprElves" + player, pos);
  this.animations.add("stand", ["40", "41"], 2);
  this.animations.add("move", ["42", "43"], 8);
  this.animations.add("attack", ["44", "45"], 8);
  this.animations.play("stand");
  this.fitToTile();
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Elf SilverLancer";
  this.health = 100;
  this.attack = 75;
  this.defense = 0.3;
  this.speed = 7;
  this.range = [1,1];
  this.cost = 600;
  this.player = player;
}
