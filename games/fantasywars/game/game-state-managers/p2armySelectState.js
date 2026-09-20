var p2ArmySelectState = {

  init: function(mapKey, armyKey1, armyKey2, gameMode, audio) {
    this.mapKey = mapKey;
    this.gameMode = gameMode;
    this.armyKey1 = armyKey1;
  },

  preload: function() {
    //TODO: Load background;
    //      Load minimaps;
    //      Load minimap text;
    //      Load text
  },

  create: function() {
    _setBackgroundImage('parchment');
    var selectArmyText = this.add.text(game.width / 2, 28, "Player 2, Choose Your Army", {font: "bold 24pt Herculanum", align: "center"});
    selectArmyText.anchor.set(0.5, 0);

    // Blue row of army_select_menu_icons.png: dwarf, elf, orc
    var dwarfArmyButton = _addArmyIconButton(74, 170, 260, 3, "battleState", this.gameMode, this.mapKey, this.armyKey1, "dwarf");
    var elfArmyButton = _addArmyIconButton(370, 170, 260, 4, "battleState", this.gameMode, this.mapKey, this.armyKey1, "elf");
    var orcArmyButton = _addArmyIconButton(666, 170, 260, 5, "battleState", this.gameMode, this.mapKey, this.armyKey1, "orc");

    _addArmyIconLabel(74, 170, 260, "Dwarves");
    _addArmyIconLabel(370, 170, 260, "Elves");
    _addArmyIconLabel(666, 170, 260, "Orcs");
  }
}
