import angular from 'angular';
import 'angular-mocks';
import {CharacterSelection} from './characterSelection.component.js';

describe('CharacterSelection', () => {
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

    describe('filterByName', () => {

        it('should return filtered `character` model list', angular.mock.inject($componentController => {
            const expected = ['hanzo', 'ana'];
            const component = $componentController('characterSelectionTest', {}, []);
            const result = component.filterByName('an');
            expect(result.length).toBe(2);
            expect(result).toContain('hanzo');
            expect(result).toContain('ana');
        }));
        
    });

});
