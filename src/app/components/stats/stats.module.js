import Stats from './stats.component.js';
import StatsCtrl from './stats.controller.js';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('stats', {
        parent: 'app',
        url: '/stats',
        component: 'stats',
    });
}

export default angular
    .module("stats", [])
    .component("stats", Stats)
    .controller("Stats", StatsCtrl)
    .config(routes)
    .name;
