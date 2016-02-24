app.controller('oneSeries5Ctrl', function ($route, $scope, $http, sactionalsFactory, sharedProperties) {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry
	
	$scope.reverse = true;
	$scope.sortField = 'Bases';
	$scope.sactionalSeries = 5;
	$scope.oneCouchCheckbox = true;
	$scope.useAllPiecesCheckbox = sharedProperties.getAllPiecesProperty();
	$scope.basesInput = sharedProperties.getBases();
	$scope.sidesInput = sharedProperties.getSides();
	$scope.widthInput = sharedProperties.getWidth();
	$scope.depthInput = sharedProperties.getDepth();

	sactionalsFactory.list(function (sactionals) {

		for (i = 0; i < sactionals.length; i++) {
			sactionals[i].Width = sactionals[i].S5Width;
			sactionals[i].Depth = sactionals[i].S5Depth;
		}

		$scope.sactionals = sactionals;
		//		console.log(JSON.stringify(sactionals));
	});

	$scope.checkedTwoCouchesCheckbox = function () {
		if ($scope.twoCouchesCheckbox) {
			setProperties();
			window.location.href = "#/series5/twoCouches";
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


//	$(function () {
//		$('#toggleMultiple').change(function () {
////			alert('Toggle: ' + $(this).prop('checked'));
//			if ($(this).prop('checked')) {
//				sharedProperties.setBases($scope.basesInput);
//				sharedProperties.setSides($scope.sidesInput);
//				sharedProperties.setWidth($scope.widthInput);
//				sharedProperties.setDepth($scope.depthInput);
//				window.location.href = "#/series5/multipleCouches";
//			}
//		})
//	});
//	
//	$(function () {
//		$('#toggleAll').change(function () {
////			alert('Toggle: ' + $(this).prop('checked'));
//			if ($(this).prop('checked')) {
//				sharedProperties.setProperty(true);
//				$scope.useAllPiecesCheckbox = sharedProperties.getProperty();
//			} else {
//				sharedProperties.setProperty(false);
//				$scope.useAllPiecesCheckbox = sharedProperties.getProperty();
//			}
//		})
//	});