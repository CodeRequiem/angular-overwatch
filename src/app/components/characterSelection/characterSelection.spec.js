import angular from 'angular';
import 'angular-mocks';
import { CharacterSelection } from './characterSelection.js';

describe('CharacterSelection', () => {

    let $componentController;

    beforeEach(() => {
        angular
            .module('characterSelectionTest', [])
            .component('characterSelectionTest', CharacterSelection);
        angular.mock.module('characterSelectionTest');
        angular.mock.inject(_$componentController_ => {
            $componentController = _$componentController_;
        });
    });

    test('creates a `characters` model of size 24', () => {
            const $ctrl = $componentController('characterSelectionTest', {}, []);
            expect($ctrl.characterNames.length).toBe(24);
        }
    );

    describe('filterByName', () => {
        test('returns filtered `character` model list', () => {
                const expected = ['hanzo', 'ana'];
                const component = $componentController('characterSelectionTest', {}, []);
                const result = component.filterByName('an');
                expect(result.length).toBe(2);
                expect(result).toContain('hanzo');
                expect(result).toContain('ana');
            }
        );
    });
});
