Ballista.prototype = new UnitArtillery();
Ballista.prototype.constructor = Ballista;

function Ballista(pos, player) {
  this.pos = pos;
  this.player = player;
  this.useSheet("sprElves" + player, pos);
  this.animations.add("stand", ["60", "61"], 2);
  this.animations.add("move", ["62", "63"], 8);
  this.animations.add("attack", ["64", "65", "66", "67"], 8);
  this.animations.play("stand");
  this.fitToTile();
  this.moveSound = game.add.audio("move");
  this.attackSound = game.add.audio("bow");
  this.name = "Elf Ballista";
  this.health = 100;
  this.attack = 80;
  this.defense = 0;
  this.speed = 4;
  this.range = [2,4];
  this.cost = 600;
  this.player = player;
}
