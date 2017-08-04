import templateUrl from './stats.html';

class StatsCtrl {
    constructor(characterService) {
        this.characters = characterService.getCharacters();
    }
}

StatsCtrl.$inject = ['characterService'];

var stats = {
    templateUrl: templateUrl,
    controller: StatsCtrl,
};

module.exports = stats;
