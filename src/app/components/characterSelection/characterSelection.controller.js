import contains from 'lodash/includes';

export default function CharacterSelection() {
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

    this.filterByName = function(filterText) {
        return this.characters.filter(characterName => contains(characterName, filterText));
    }

    this.reverseSort = function() {
        this.characters = this.characters.reverse();
    }
}
