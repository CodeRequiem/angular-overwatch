function character() {
    return {
        getCharacters: getCharacters,
        getCharacterNames: getCharacterNames,
        getRandomCharacter: getRandomCharacter,
    }
}

function getCharacters() {
    return [
        { name:'ana', clicked: 0 },
        { name:'bastion', clicked: 0 },
        { name:'dva', clicked: 0 },
        { name:'genji', clicked: 0 },
        { name:'hanzo', clicked: 0 },
        { name:'junkrat', clicked: 0 },
        { name:'lucio', clicked: 0 },
        { name:'mccree', clicked: 0 },
        { name:'mei', clicked: 0 },
        { name:'mercy', clicked: 0 },
        { name:'orisa', clicked: 0 },
        { name:'pharah', clicked: 0 },
        { name:'reaper', clicked: 0 },
        { name:'reinhardt', clicked: 0 },
        { name:'roadhog', clicked: 0 },
        { name:'soldier76', clicked: 0 },
        { name:'sombra', clicked: 0 },
        { name:'symmetra', clicked: 0 },
        { name:'torbjorn', clicked: 0 },
        { name:'tracer', clicked: 0 },
        { name:'widowmaker', clicked: 0 },
        { name:'winston', clicked: 0 },
        { name:'zarya', clicked: 0 },
        { name:'zenyatta', clicked: 0 },
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
