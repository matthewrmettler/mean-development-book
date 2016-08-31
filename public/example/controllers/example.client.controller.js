/**
 * Created by Matt on 8/29/2016.
 */

angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        $scope.name = Authentication.user ? Authentication.user.fullName : 'Mean Application';
    }
]);