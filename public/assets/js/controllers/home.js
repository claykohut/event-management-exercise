angular.module('test.home', [])
.controller('HomeCtrl', ['$scope', '$http', 'GuestList', function($scope, $http, GuestList ) {

	$scope.guestList = GuestList

}]);