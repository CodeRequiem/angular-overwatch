import {CharacterSelection} from './characterSelection.component.js';
import routes from './characterSelection.routes.js';
import {characterFilter} from './characterSelection.filter.js';
import './characterSelection.less';

export default angular
    .module("characterSelection", [])
    .component("characterSelection", CharacterSelection)
    .filter("characterFilter", characterFilter)
    .config(routes)
    .name;
