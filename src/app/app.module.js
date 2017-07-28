import angular from 'angular';
import root from './components/root/root.component.js';
import CharacterSelection from './components/root/root.controller.js';
import '../../index.html';

angular
    .module("app", [])
    .component("root", root)
    .controller("CharacterSelection", CharacterSelection);
