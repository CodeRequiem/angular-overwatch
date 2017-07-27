var root = {
    templateUrl: './src/app/components/root/root.html',
    controller: 'CharacterSelectionController',
};

angular
    .module("app", [])
    .component("root", root);
