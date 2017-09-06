function character() {
    return {
        getCharacters: getCharacters,
        getCharacterNames: getCharacterNames,
        getRandomCharacter: getRandomCharacter,
    }
}

function getCharacters() {
    return [
        { name:'ana', clicked: 0, loot: 10 },
        { name:'bastion', clicked: 0, loot: 14 },
        { name:'dva', clicked: 0, loot: 5 },
        { name:'genji', clicked: 0, loot: 12 },
        { name:'hanzo', clicked: 0, loot: 6 },
        { name:'junkrat', clicked: 0, loot: 8 },
        { name:'lucio', clicked: 0, loot: 7 },
        { name:'mccree', clicked: 0, loot: 1 },
        { name:'mei', clicked: 0, loot: 10 },
        { name:'mercy', clicked: 0, loot: 19 },
        { name:'orisa', clicked: 0, loot: 17 },
        { name:'pharah', clicked: 0, loot: 11 },
        { name:'reaper', clicked: 0, loot: 12 },
        { name:'reinhardt', clicked: 0, loot: 4 },
        { name:'roadhog', clicked: 0, loot: 12 },
        { name:'soldier76', clicked: 0, loot: 2 },
        { name:'sombra', clicked: 0, loot: 6 },
        { name:'symmetra', clicked: 0, loot: 22 },
        { name:'torbjorn', clicked: 0, loot: 15 },
        { name:'tracer', clicked: 0, loot: 25 },
        { name:'widowmaker', clicked: 0, loot: 2 },
        { name:'winston', clicked: 0, loot: 14 },
        { name:'zarya', clicked: 0, loot: 19 },
        { name:'zenyatta', clicked: 0, loot: 20 },
    ];
}

function getCharacterNames() {
    return getCharacters().map(character => character.name);
}

function getRandomCharacter() {
    let characterNames = getCharacterNames();
    let index = Math.floor(Math.random() * (characterNames.length - 1)) + 0
    return characterNames[index];
}

export default character;
