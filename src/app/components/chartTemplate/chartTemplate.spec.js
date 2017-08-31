import angular from 'angular';
import 'angular-mocks';
import { chartTemplate } from './chartTemplate.js';

describe('chartTemplate', () =
    beforeEach(() =
        angular
            .module('chartTemplateTest', [])
            .component('chartTemplateTest', chartTemplate);
        angular.mock.module('chartTemplateTest');
    });

    test(
        'test-name-here',
        angular.mock.inject($componentController = }),
    );
});
