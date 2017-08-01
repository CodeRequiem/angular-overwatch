@echo off

set "originalDir=%cd%"

for /d /r %cd% %%a in (*) do if /i "%%~nxa"=="components" set "folderpath=%%a"

cd "%folderpath%"
mkdir %1
cd %1

echo import Home from './%1.component.js'; >> %1.module.js
echo import './%1.less'; >> %1.module.js

echo routes.$inject = ['$stateProvider']; >> %1.module.js
echo function routes($stateProvider) { >> %1.module.js
echo     $stateProvider.state('%1', { >> %1.module.js
echo         parent: '%2', >> %1.module.js
echo         url: '/%1', >> %1.module.js
echo         component: '%1', >> %1.module.js
echo     }); >> %1.module.js
echo } >> %1.module.js
echo
echo export default angular >> %1.module.js
echo     .module("%1", []) >> %1.module.js
echo     .component("%1", Home) >> %1.module.js
echo     .config(routes) >> %1.module.js
echo     .name; >> %1.module.js

echo class %1Controller { > %1.js
echo   constructor() { >> %1.js
echo   } >> %1.js
echo } >> %1.js
echo
echo export const %1 = { >> %1.js
echo   template: require('./%1.html'), >> %1.js
echo   controller: %1Controller, >> %1.js
echo   bindings: {} >> %1.js
echo }; >> %1.js

echo import angular from 'angular'; > %1.spec.js
echo import 'angular-mocks'; >> %1.spec.js
echo import { %1 } from './%1.js'; >> %1.spec.js
echo  >> %1.spec.js
echo describe('%1', () => { >> %1.spec.js
echo     beforeEach(() => { >> %1.spec.js
echo         angular >> %1.spec.js
echo             .module('%1Test', []) >> %1.spec.js
echo             .component('%1Test', %1); >> %1.spec.js
echo         angular.mock.module('%1Test'); >> %1.spec.js
echo     }); >> %1.spec.js
echo  >> %1.spec.js
echo     test( >> %1.spec.js
echo         'test-name-here', >> %1.spec.js
echo         angular.mock.inject($componentController => { }), >> %1.spec.js
echo     ); >> %1.spec.js
echo }); >> %1.spec.js

echo routes.$inject = ['$stateProvider']; > %1.routes.js
echo export default function routes($stateProvider) { >> %1.routes.js
echo     $stateProvider.state('%1', { >> %1.routes.js
echo         parent: 'app', >> %1.routes.js
echo         url: '/%1', >> %1.routes.js
echo         component: '%1', >> %1.routes.js
echo     }); >> %1.routes.js
echo } >> %1.routes.js

echo ^<section class="%1-section"^> > %1.html
echo >> %1.html
echo ^</section^> >> %1.html

echo .%1-section { > %1.less
echo >> %1.less
echo } >> %1.less

cd "%originalDir%"
