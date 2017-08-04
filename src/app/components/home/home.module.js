import {Home} from './home.js';
import './home.less';
import routes from './home.routes.js';

export default angular
    .module("home", [])
    .component("home", Home)
    .config(routes)
    .name;
