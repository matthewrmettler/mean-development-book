/**
 * Created by Matt on 8/29/2016.
 */

/** Manual Angular Boostrapping **/
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);

angular.element(document).ready(function() {
   angular.bootstrap(document, [mainApplicationModuleName])
});