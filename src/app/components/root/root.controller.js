function CharacterSelectionController() {
    this.characters = [
        "ana",
        "bastion",
        "dva",
        "genji",
        "hanzo",
        "junkrat",
        "lucio",
        "mccree",
        "mei",
        "mercy",
        "orisa",
        "pharah",
        "reaper",
        "reinhart",
        "roadhog",
        "soldier76",
        "sombra",
        "symmetra",
        "torbjorn",
        "tracer",
        "widowmaker",
        "winston",
        "zarya",
        "zenyatta"
    ];
}
angular
    .module('app')
    .controller('CharacterSelectionController', CharacterSelectionController);
