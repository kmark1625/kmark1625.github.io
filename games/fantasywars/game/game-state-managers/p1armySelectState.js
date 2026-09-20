var p1ArmySelectState = {

  init: function(mapKey, armyKey1, armyKey2, gameMode, audio) {
    this.mapKey = mapKey;
    this.gameMode = gameMode;
  },

  preload: function() {
    //TODO: Load background;
    //      Load minimaps;
    //      Load minimap text;
    //      Load text
  },

  create: function() {
    _setBackgroundImage('parchment');
    var selectArmyText = this.add.text(game.width / 2, 28, "Player 1, Choose Your Army", {font: "bold 24pt Herculanum", align: "center"});
    selectArmyText.anchor.set(0.5, 0);

    // Red row of army_select_menu_icons.png: dwarf, elf, orc
    var dwarfArmyButton = _addArmyIconButton(74, 170, 260, 0, "p2ArmySelectState", this.gameMode, this.mapKey, "dwarf", "armyKey2");
    var elfArmyButton = _addArmyIconButton(370, 170, 260, 1, "p2ArmySelectState", this.gameMode, this.mapKey, "elf", "armyKey2");
    var orcArmyButton = _addArmyIconButton(666, 170, 260, 2, "p2ArmySelectState", this.gameMode, this.mapKey, "orc", "armyKey2");

    _addArmyIconLabel(74, 170, 260, "Dwarves");
    _addArmyIconLabel(370, 170, 260, "Elves");
    _addArmyIconLabel(666, 170, 260, "Orcs");
  }
}

function _addArmyIconButton(x, y, size, frame, targetState, gameMode, mapKey, armyKey1, armyKey2) {
  var button = new MenuButton(x, y, "armySelectIcons", targetState, gameMode, mapKey, armyKey1, armyKey2, "flash", frame, frame, frame, frame);
  button.width = size;
  button.height = size;
  return button;
}

function _addArmyIconLabel(x, y, size, label) {
  var text = game.add.text(x + size / 2, y + size + 12, label, {font: "bold 18pt Herculanum", align: "center"});
  text.anchor.set(0.5, 0);
  return text;
}

function _setBackgroundImage(imgKey) {
  var logo = game.add.image(0, 0, imgKey);
  logo.width = game.width;
  logo.height = game.height;
};
