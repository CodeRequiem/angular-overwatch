import {CharacterSelection} from './characterSelection.component.js';
import routes from './characterSelection.routes.js';
import './characterSelection.less';

export default angular
    .module("characterSelection", [])
    .component("characterSelection", CharacterSelection)
    .config(routes)
    .name;
