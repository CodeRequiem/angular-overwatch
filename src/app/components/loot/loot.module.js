import loot from './loot.js';
import './loot.less';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('loot', {
        parent: 'app',
        url: '/loot',
        component: 'loot',
    });
}

export default angular
    .module("loot", [])
    .component("loot", loot)
    .config(routes)
    .name;
