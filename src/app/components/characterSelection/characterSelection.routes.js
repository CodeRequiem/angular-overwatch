routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
    $stateProvider.state('characterSelection', {
        parent: 'app',
        url: '/character-select',
        component: 'characterSelection',
    });
}
