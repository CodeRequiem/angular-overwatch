import angular from 'angular';
import 'angular-mocks';
import { performanceMetricsChart } from './performanceMetricsChart.js';

describe('performanceMetricsChart', () =
    beforeEach(() =
        angular
            .module('performanceMetricsChartTest', [])
            .component('performanceMetricsChartTest', performanceMetricsChart);
        angular.mock.module('performanceMetricsChartTest');
    });

    test(
        'test-name-here',
        angular.mock.inject($componentController = }),
    );
});
