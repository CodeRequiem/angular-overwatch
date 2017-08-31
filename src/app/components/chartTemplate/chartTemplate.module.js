import chartTemplate from './chartTemplate.js';
import './chartTemplate.less';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('chartTemplate', {
        parent: 'app',
        url: '/chartTemplate',
        component: 'chartTemplate',
    });
}

export default angular
    .module("chartTemplate", [])
    .component("chartTemplate", chartTemplate)
    .config(routes)
    .name;
