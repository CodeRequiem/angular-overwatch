import angular from 'angular';
import 'angular-mocks';
import { chartTemplate } from './chartTemplate.js';
import performanceDataService from '../../services/performanceData.service.js';

describe('chartTemplate', () =
    beforeEach(() =
        angular
            .module('chartTemplateTest', [])
            .component('chartTemplateTest', chartTemplate);
        angular.mock.module('chartTemplateTest');
    });

    describe('Service', () => {
      let service;

      beforeEach(() => {
        angular.mock.inject((performanceDataService) => {
          service = performanceDataService;
        });
      });

      // describe('testServiceCalls', () => {
      //   test('should test service calls here', () => {
      //
      //   });
      // });
    });

    describe('Chart', () => {
      // describe('chartTests', () => {
      //   test('should test chart logic', () => {
      //
      //   });
      // });
    });


});
