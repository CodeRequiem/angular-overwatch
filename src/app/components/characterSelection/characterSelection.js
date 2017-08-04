import templateUrl from './characterSelection.html';
import contains from 'lodash/includes';

class CharacterSelectionCtrl {
    constructor(characterService) {
        this.characterService = characterService;
    }

    $onInit() {
        this.characters = this.characterService.getCharacters();
        this.characterNames = this.characterService.getCharacterNames();
    }

    reverseSort() {
        this.characterNames = this.characterNames.reverse();
    }
}

CharacterSelectionCtrl.$inject = ['characterService'];

export const CharacterSelection = {
    templateUrl: templateUrl,
    controller: CharacterSelectionCtrl,
};
