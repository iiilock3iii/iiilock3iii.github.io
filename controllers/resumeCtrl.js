app.controller('resumeCtrl', function ($scope, $http, $routeParams, $location) {
	
//	Copyright (C) 2015 Collin Welker
	
//    console.log($routeParams);
  $scope.baseUrl = $location.absUrl();
	$scope.myVariable = $location.path();//$routeParams.urlVariable;
	
});