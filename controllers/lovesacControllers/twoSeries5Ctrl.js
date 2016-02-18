app.controller('twoSeries5Ctrl', function ($route, $scope, $http, sactionalsFactorySeries5twoCombinations, sharedProperties) {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry
	
	$scope.reverse = true;
	$scope.sortField = 'id';
	$scope.sactionalSeries = 5;
	$scope.twoCouchesCheckbox = true;
	$scope.threeCouchesCheckbox = false;
	$scope.useAllPiecesCheckbox = sharedProperties.getAllPiecesProperty();
	$scope.basesInput = sharedProperties.getBases();
	$scope.sidesInput = sharedProperties.getSides();
	$scope.widthInput = sharedProperties.getWidth();
	$scope.depthInput = sharedProperties.getDepth();

	sactionalsFactorySeries5twoCombinations.list(function (sactionals) {

		$scope.sactionals = sactionals;
		//		console.log(JSON.stringify(sactionals));
		$scope.sactionalSeries = 5;
	});

	$scope.checkedOneCouchCheckbox = function () {
		if ($scope.oneCouchCheckbox) {
			setProperties();
			window.location.href = "#/series5";
		}
	};
	
	$scope.checkedThreeCouchesCheckbox = function () {
		if ($scope.threeCouchesCheckbox) {
			setProperties();
			window.location.href = "#/series5/threeCouches";
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