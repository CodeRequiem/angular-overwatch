import templateUrl from './stats.html';

class StatsCtrl {
    constructor(characterService) {
        this.characterService = characterService;
    }

    $onInit() {
        this.characters = this.characterService.getCharacters();
    }
}

StatsCtrl.$inject = ['characterService'];

const stats = {
    templateUrl: templateUrl,
    controller: StatsCtrl,
};

module.exports = stats;
