/**
 * Created by Matt on 8/29/2016.
 */

/** Manual Angular Boostrapping **/
var myApp = 'mean';

var mainApplicationModule = angular.module(myApp, ['ngRoute', 'example']);

/** Use hashbang for better SEO **/
mainApplicationModule.config(['$locationProvider',
   function($locationProvider) {
      $locationProvider.hashPrefix('!');
   }]);

angular.element(document).ready(function() {
   angular.bootstrap(document, [myApp])
});