import angular from 'angular';
import 'angular-mocks';
import {CharacterSelection} from './characterSelection.component.js';

describe('CharacterSelection', function() {
    beforeEach(() => {
        angular
            .module('characterSelectionTest', [])
            .component('characterSelectionTest', CharacterSelection);
        angular.mock.module('characterSelectionTest');
    });

    it('should create a `characters` model of size 24', angular.mock.inject($componentController => {
        const component = $componentController('characterSelectionTest', {}, []);
        expect(component.characters.length).toBe(24);
    }));
});
