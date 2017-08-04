import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import template from './app.html';
import CharacterSelect from './components/characterSelection/characterSelection.module.js';
import characterService from './factories/character.service.js';
import Stats from './components/stats/stats.module.js';
import Home from './components/home/home.module.js';
import '../../index.html';
import './app.less';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider.state('app', {
        url: '',
        templateUrl: template,
        redirectTo: 'home',
    });
}

loadDefaultPage.$inject = ['$state'];
function loadDefaultPage($state) {
    $state.go('app');
}

angular
    .module('app', [uiRouter, CharacterSelect, Stats, Home])
    .factory('characterService', characterService)
    .config(routes)
    .run(loadDefaultPage);
