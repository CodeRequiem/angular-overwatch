import contains from 'lodash/includes';

export function characterFilter() {
    return function(characterList, filterText) {
        return (filterText && characterList.length > 1)
            ? characterList.filter(characterName => contains(characterName.toLowerCase(), filterText.toLowerCase()))
            : characterList;
    }
}
