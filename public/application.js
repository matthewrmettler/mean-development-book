/**
 * Created by Matt on 8/29/2016.
 */

/** Manual Angular Boostrapping **/
var myApp = 'mean';

var mainApplicationModule = angular.module(myApp, ['ngRoute', 'users', 'example']);

/** Use hashbang for better SEO **/
mainApplicationModule.config(['$locationProvider',
   function($locationProvider) {
      $locationProvider.hashPrefix('!');
   }]);

   if (window.location.hash === '#_=_') {
      window.location.hash = '#!';
   }

   angular.element(document).ready(function() {
      angular.bootstrap(document, [myApp])
});