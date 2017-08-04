import Stats from './stats.js';
import './stats.less';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('stats', {
        parent: 'app',
        url: '/stats',
        component: 'stats',
    });
}

export default angular
    .module('stats', [])
    .component('stats', Stats)
    .config(routes).name;
