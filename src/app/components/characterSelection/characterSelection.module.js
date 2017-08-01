import CharacterSelection from './characterSelection.component.js';
import CharacterSelectionCtrl from './characterSelection.controller.js';
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
    .controller("CharacterSelection", CharacterSelectionCtrl)
    .config(routes)
    .name;
