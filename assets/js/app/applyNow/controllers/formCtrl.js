app
 .controller('formCtrl', ['$scope', '$rootScope', '$http', '$cookieStore','$state', '$timeout', '$rootScope', 'API_CONFIG', '$stateParams',
 	function ($scope, $rootScope, $http, $cookieStore, $state, $timeout, $rootScope, API_CONFIG, $stateParams) {

    $scope.step = $stateParams.step;

    // CODE HERE
    console.log('ESTAMOS EN ' + $scope.step);

 }]);





