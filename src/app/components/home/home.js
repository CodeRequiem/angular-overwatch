import templateUrl from './home.html';

class HomeCtrl {
    constructor(characterService) {
        this.characterService = characterService;
    }

    $onInit() {
        this.randomCharacterName = this.characterService.getRandomCharacter();
    }
}

HomeCtrl.$inject = ['characterService'];

const Home = {
    templateUrl: templateUrl,
    controller: HomeCtrl,
};

module.exports = Home;
