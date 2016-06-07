app.controller('mahJongCtrl', function ($scope, $http, $routeParams, $location) {

//	Copyright (C) 2015 Collin Welker

//    console.log($routeParams);
  $scope.baseUrl = $location.absUrl();
  $scope.myVariable = $location.path();//$routeParams.urlVariable;

}).controller('404Ctrl', function ($scope, $http, $routeParams, $location) {

//	Copyright (C) 2015 Collin Welker

//    console.log($routeParams);
  $scope.baseUrl = $location.absUrl();
  $scope.myVariable = $location.path();//$routeParams.urlVariable;

}).controller('aboutCtrl', function ($scope, $http, $routeParams, $location) {

//	Copyright (C) 2015 Collin Welker

//    console.log($routeParams);
  $scope.baseUrl = $location.absUrl();
  $scope.myVariable = $location.path();//$routeParams.urlVariable;

}).controller('contactCtrl', function ($scope, $http, $routeParams, $location) {

//	Copyright (C) 2015 Collin Welker

//    console.log($routeParams);
  $scope.baseUrl = $location.absUrl();
  $scope.myVariable = $location.path();//$routeParams.urlVariable;

}).controller('mainCtrl', function ($scope, $http) {

//	Copyright (C) 2015 Collin Welker

  $scope.title = "Software Engineer | Portfolio and Resume of Collin Welker";//$routeParams.urlVariable;
//	console.log($scope.title);

}).controller('resumeCtrl', function ($scope, $http, $routeParams, $location) {

//	Copyright (C) 2015 Collin Welker

//    console.log($routeParams);
  $scope.baseUrl = $location.absUrl();
  $scope.myVariable = $location.path();//$routeParams.urlVariable;

}).controller('lovesacHomeCtrl', function ($scope, $http, sharedProperties) {

//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

  sharedProperties.setAllPiecesProperty(false);
  sharedProperties.setBases(undefined);
  sharedProperties.setSides(undefined);
  sharedProperties.setWidth(undefined);
  sharedProperties.setDepth(undefined);
}).controller('oneSeries5Ctrl', function ($route, $scope, $http, sactionalsFactory, sharedProperties) {

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
  };

  function setProperties() {
    sharedProperties.setBases($scope.basesInput);
    sharedProperties.setSides($scope.sidesInput);
    sharedProperties.setWidth($scope.widthInput);
    sharedProperties.setDepth($scope.depthInput);
  }

}).controller('oneSeries6Ctrl', function ($route, $scope, $http, sactionalsFactory, sharedProperties) {

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
  };

  function setProperties() {
    sharedProperties.setBases($scope.basesInput);
    sharedProperties.setSides($scope.sidesInput);
    sharedProperties.setWidth($scope.widthInput);
    sharedProperties.setDepth($scope.depthInput);
  }

}).controller('threeSeries5Ctrl', function ($route, $scope, $http, sactionalsFactorySeries5threeCombinations, sharedProperties) {

//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

  $scope.reverse = true;
  $scope.sortField = 'id';
  $scope.sactionalSeries = 5;
  $scope.twoCouchesCheckbox = false;
  $scope.threeCouchesCheckbox = true;
  $scope.useAllPiecesCheckbox = sharedProperties.getAllPiecesProperty();
  $scope.basesInput = sharedProperties.getBases();
  $scope.sidesInput = sharedProperties.getSides();
  $scope.widthInput = sharedProperties.getWidth();
  $scope.depthInput = sharedProperties.getDepth();

  sactionalsFactorySeries5threeCombinations.list(function (sactionals) {

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

  $scope.checkedTwoCouchesCheckbox = function () {
    if ($scope.twoCouchesCheckbox) {
      setProperties();
      window.location.href = "#/series5/twoCouches";
    }
  };

  $scope.order = function (sortField) {
    $scope.reverse = ($scope.sortField === sortField) ? !$scope.reverse : true;
    //https://docs.angularjs.org/api/ng/filter/orderBy
    $scope.sortField = sortField;
  };
//
  $scope.checkedUseAllPiecesCheckbox = function () {
    //		alert($scope.useAllPiecesCheckbox)
    var temp = $scope.useAllPiecesCheckbox;
    sharedProperties.setAllPiecesProperty(temp);
    //		alert(sharedProperties.getAllPiecesProperty());
  };
//
  $scope.reloadPage = function () {
    sharedProperties.setAllPiecesProperty(false);
    sharedProperties.setBases(undefined);
    sharedProperties.setSides(undefined);
    sharedProperties.setWidth(undefined);
    sharedProperties.setDepth(undefined);
    $route.reload();
  };

  function setProperties() {
    sharedProperties.setBases($scope.basesInput);
    sharedProperties.setSides($scope.sidesInput);
    sharedProperties.setWidth($scope.widthInput);
    sharedProperties.setDepth($scope.depthInput);
  }

}).controller('threeSeries6Ctrl', function ($route, $scope, $http, sactionalsFactorySeries6threeCombinations, sharedProperties) {

//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

  $scope.reverse = true;
  $scope.sortField = 'id';
  $scope.sactionalSeries = 6;
  $scope.twoCouchesCheckbox = false;
  $scope.threeCouchesCheckbox = true;
  $scope.useAllPiecesCheckbox = sharedProperties.getAllPiecesProperty();
  $scope.basesInput = sharedProperties.getBases();
  $scope.sidesInput = sharedProperties.getSides();
  $scope.widthInput = sharedProperties.getWidth();
  $scope.depthInput = sharedProperties.getDepth();

  sactionalsFactorySeries6threeCombinations.list(function (sactionals) {

    $scope.sactionals = sactionals;
    //		console.log(JSON.stringify(sactionals));
    $scope.sactionalSeries = 6;
  });

  $scope.checkedOneCouchCheckbox = function () {
    if ($scope.oneCouchCheckbox) {
      setProperties();
      window.location.href = "#/series6";
    }
  };

  $scope.checkedTwoCouchesCheckbox = function () {
    if ($scope.twoCouchesCheckbox) {
      setProperties();
      window.location.href = "#/series6/twoCouches";
    }
  };

  $scope.order = function (sortField) {
    $scope.reverse = ($scope.sortField === sortField) ? !$scope.reverse : true;
    //https://docs.angularjs.org/api/ng/filter/orderBy
    $scope.sortField = sortField;
  };
//
  $scope.checkedUseAllPiecesCheckbox = function () {
    //		alert($scope.useAllPiecesCheckbox)
    var temp = $scope.useAllPiecesCheckbox;
    sharedProperties.setAllPiecesProperty(temp);
    //		alert(sharedProperties.getAllPiecesProperty());
  };
//
  $scope.reloadPage = function () {
    sharedProperties.setAllPiecesProperty(false);
    sharedProperties.setBases(undefined);
    sharedProperties.setSides(undefined);
    sharedProperties.setWidth(undefined);
    sharedProperties.setDepth(undefined);
    $route.reload();
  };

  function setProperties() {
    sharedProperties.setBases($scope.basesInput);
    sharedProperties.setSides($scope.sidesInput);
    sharedProperties.setWidth($scope.widthInput);
    sharedProperties.setDepth($scope.depthInput);
  }

}).controller('twoSeries5Ctrl', function ($route, $scope, $http, sactionalsFactorySeries5twoCombinations, sharedProperties) {

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
  };

  function setProperties() {
    sharedProperties.setBases($scope.basesInput);
    sharedProperties.setSides($scope.sidesInput);
    sharedProperties.setWidth($scope.widthInput);
    sharedProperties.setDepth($scope.depthInput);
  }

}).controller('twoSeries6Ctrl', function ($route, $scope, $http, sactionalsFactorySeries6twoCombinations, sharedProperties) {

//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

  $scope.reverse = true;
  $scope.sortField = 'id';
  $scope.sactionalSeries = 6;
  $scope.twoCouchesCheckbox = true;
  $scope.threeCouchesCheckbox = false;
  $scope.useAllPiecesCheckbox = sharedProperties.getAllPiecesProperty();
  $scope.basesInput = sharedProperties.getBases();
  $scope.sidesInput = sharedProperties.getSides();
  $scope.widthInput = sharedProperties.getWidth();
  $scope.depthInput = sharedProperties.getDepth();

  sactionalsFactorySeries6twoCombinations.list(function (sactionals) {

    $scope.sactionals = sactionals;
    //		console.log(JSON.stringify(sactionals));
    $scope.sactionalSeries = 6;
  });

  $scope.checkedOneCouchCheckbox = function () {
    if ($scope.oneCouchCheckbox) {
      setProperties();
      window.location.href = "#/series6";
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
  };

  function setProperties() {
    sharedProperties.setBases($scope.basesInput);
    sharedProperties.setSides($scope.sidesInput);
    sharedProperties.setWidth($scope.widthInput);
    sharedProperties.setDepth($scope.depthInput);
  }

});