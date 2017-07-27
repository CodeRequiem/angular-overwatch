describe('CharacterSelectionController', function() {

    beforeEach(module('app'));

    it('should create a `characters` model', inject(function($controller) {
        const charListLength = $controller.characters.length
        expect(charListLength).toBe(24);
    }));

});
