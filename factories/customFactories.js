//Copyright (C) 2015 Collin Welker
//Notarized 12/06/2015 by Mark Hendry

app.factory('sactionalsFactory', function ($http) {

	//to cache sactionals.json so it isn't loaded on every view change
	function getData(callback) {
		$http({
			method: 'GET',
			url: 'json/sactionals.json',
			cache: true
		}).success(callback);
	}

	return {
		list: getData
	};
}).factory('sactionalsFactorySeries5twoCombinations', function ($http) {

	function getData(callback) {
		$http({
			method: 'GET',
			url: 'json/series5twoCombinations.json',
			cache: true
		}).success(callback);
	}

	return {
		list: getData
	};
}).factory('sactionalsFactorySeries6twoCombinations', function ($http) {

	function getData(callback) {
		$http({
			method: 'GET',
			url: 'json/series6twoCombinations.json',
			cache: true
		}).success(callback);
	}

	return {
		list: getData
	};
}).factory('sactionalsFactorySeries5threeCombinations', function ($http) {

	function getData(callback) {
		$http({
			method: 'GET',
			url: 'json/series5threeCombinations.json',
			cache: true
		}).success(callback);
	}

	return {
		list: getData
	};
}).factory('sactionalsFactorySeries6threeCombinations', function ($http) {

	function getData(callback) {
		$http({
			method: 'GET',
			url: 'json/series6threeCombinations.json',
			cache: true
		}).success(callback);
	}

	return {
		list: getData
	};
});