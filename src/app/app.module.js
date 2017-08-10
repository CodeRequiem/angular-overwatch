import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import './app.less';
import '../../index.html';
import template from './app.html';
import characterService from './factories/character.service.js';
import CharacterSelect from './components/characterSelection/characterSelection.module.js';
import Stats from './components/stats/stats.module.js';
import Loot from './components/loot/loot.module.js';
import Home from './components/home/home.module.js';

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
    .module('app', [uiRouter, CharacterSelect, Stats, Loot, Home])
    .factory('characterService', characterService)
    .config(routes)
    .run(loadDefaultPage);
