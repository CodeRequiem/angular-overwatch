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

    this.reverseSort = function() {
        this.characters = this.characters.reverse();
    }
}
