angular
    .module('app')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'characterSelect',
            config: {
                abstract: true,
                template: '<characterSelection/>',
                url: '/character-select',
            }
        },
        {
            state: 'stats',
            config: {
                abstract: true,
                template: '<stats/>',
                url: '/player-stats',
            }
        },
    ];
}
