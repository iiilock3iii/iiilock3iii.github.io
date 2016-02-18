app.controller('oneSeries6Ctrl', function ($route, $scope, $http, sactionalsFactory, sharedProperties) {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry
	
	$scope.reverse = true;
	$scope.sortField = 'Bases';
	$scope.sactionalSeries = 6;
	$scope.oneCouchCheckbox = true;
	$scope.useAllPiecesCheckbox = sharedProperties.getAllPiecesProperty();
	$scope.basesInput = sharedProperties.getBases();
	$scope.sidesInput = sharedProperties.getSides();
	$scope.widthInput = sharedProperties.getWidth();
	$scope.depthInput = sharedProperties.getDepth();

	sactionalsFactory.list(function (sactionals) {

		for (i = 0; i < sactionals.length; i++) {
			sactionals[i].Width = sactionals[i].S6Width;
			sactionals[i].Depth = sactionals[i].S6Depth;
		}

		$scope.sactionals = sactionals;
		//		console.log(JSON.stringify(sactionals));
	});

	$scope.checkedTwoCouchesCheckbox = function () {
		if ($scope.twoCouchesCheckbox) {
			setProperties();
			window.location.href = "#/series6/twoCouches";
		}
	};
	
	$scope.checkedThreeCouchesCheckbox = function () {
		if ($scope.threeCouchesCheckbox) {
			setProperties();
			window.location.href = "#/series6/threeCouches";
		}
	};

	$scope.order = function (sortField) {
		$scope.reverse = ($scope.sortField === sortField) ? !$scope.reverse : true;
		//https://docs.angularjs.org/api/ng/filter/orderBy
		$scope.sortField = sortField;
	};

	$scope.checkedUseAllPiecesCheckbox = function () {
		//		alert($scope.useAllPiecesCheckbox)
		var temp = $scope.useAllPiecesCheckbox;
		sharedProperties.setAllPiecesProperty(temp);
		//		alert(sharedProperties.getAllPiecesProperty());
	};
	
	$scope.reloadPage = function () {
		sharedProperties.setAllPiecesProperty(false);
		sharedProperties.setBases(undefined);
		sharedProperties.setSides(undefined);
		sharedProperties.setWidth(undefined);
		sharedProperties.setDepth(undefined);
		$route.reload();
	}
	
	function setProperties() {
		sharedProperties.setBases($scope.basesInput);
		sharedProperties.setSides($scope.sidesInput);
		sharedProperties.setWidth($scope.widthInput);
		sharedProperties.setDepth($scope.depthInput);
	}
	
});