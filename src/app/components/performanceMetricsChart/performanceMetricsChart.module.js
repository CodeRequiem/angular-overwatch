import performanceMetricsChart from './performanceMetricsChart.js';
import './performanceMetricsChart.less';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('performanceMetricsChart', {
        parent: 'app',
        url: '/performanceMetricsChart',
        component: 'performanceMetricsChart',
    });
}

export default angular
    .module("performanceMetricsChart", [])
    .component("performanceMetricsChart", performanceMetricsChart)
    .config(routes)
    .name;
