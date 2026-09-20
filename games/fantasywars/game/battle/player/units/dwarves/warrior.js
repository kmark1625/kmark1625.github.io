Warrior.prototype = new UnitInfantry();
Warrior.prototype.constructor = Warrior;

function Warrior(pos, player) {
  this.pos = pos;
  this.player = player;
  this.useSheet("sprDwarves" + player, pos);
  this.animations.add("stand", ["0", "1"], 2);
  this.animations.add("move", ["2", "3"], 8);
  this.animations.add("attack", ["4", "5", "6", "7"], 8);
  this.animations.play("stand");
  this.fitToTile();
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("slash");
  this.name = "Dwarf Warrior";
  this.health = 100;
  this.attack = 55;
  this.defense = 0.20;
  this.speed = 3;
  this.range = [1,1];
  this.cost = 100;
}
