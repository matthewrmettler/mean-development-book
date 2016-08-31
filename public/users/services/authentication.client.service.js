/**
 * Created by Matt on 8/30/2016.
 */

angular.module('users').factory('Authentication', [
    function() {
        this.user = window.user;

        return {
           user: this.user
        }
    }
]);