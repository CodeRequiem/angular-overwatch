routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
    $stateProvider.state('home', {
        parent: 'app',
        url: '/home',
        component: 'home',
    });
}
