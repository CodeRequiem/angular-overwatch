import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './components/template/template.html';
import CharacterSelect from './components/characterSelection/characterSelection.module.js';
import Stats from './components/stats/stats.module.js';
import Home from './components/home/home.module.js';
import '../../index.html';
import './components/template/template.less';

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
    .module("app", [uiRouter, CharacterSelect, Stats, Home])
    .config(routes)
    .run(loadDefaultPage);
