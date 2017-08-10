import CharacterSelection from './characterSelection.js';
import {characterFilter} from './characterSelection.filter.js';
import './characterSelection.less';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('characterSelection', {
        parent: 'app',
        url: '/character-select',
        component: 'characterSelection',
    });
}

export default angular
    .module("characterSelection", [])
    .component("characterSelection", CharacterSelection)
    .filter("characterFilter", characterFilter)
    .config(routes)
    .name;
