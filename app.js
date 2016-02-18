$(document).ready(function () {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry
	
	//	http://jsfiddle.net/livibetter/HV9HM/
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		//		http://stackoverflow.com/questions/25275947/uncaught-typeerror-cannot-read-property-top-of-undefined
		var stickyanchor = $('#sticky-anchor');
		if (!stickyanchor.length) {
			return;
		}
		var div_top = stickyanchor.offset().top;
		var sticky = $('#sticky');
		var bottom = $('#topButton');
		var toMove = 0;
		if (window_top > div_top) {
			sticky.addClass('stick');
			toMove = (($(window).width() / 2) - (sticky.width() / 2)) + "px";
			sticky.css("left", toMove);
			//keep paginator in center

			bottom.addClass('stickBottom');
			toMove = (stickyanchor.width() + (($(window).width() - stickyanchor.width()) / 2) - (bottom.width()) * 3) + "px";
			bottom.css("left", toMove);
			//keep topOfPage button in bottom right, if width of button changes this will need to change also
		} else {
			sticky.removeClass('stick');
			bottom.removeClass('stickBottom');
		}
	}

	$(function () {
		//relocate sticky on window scroll (keep it at the top of window)
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});

	$(window).resize(function () {
		sticky_relocate();
		//if page is scrolled down past paginator and the window is resized, recall sticky-relocate function to keep paginator centered
	});
});

var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination' ]);

app.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '/views/home.html',
		controller: 'homeCtrl'
	}).
	when('/lovesac', {
		templateUrl: '/views/lovesacViews/lovesacHome.html',
		controller: 'lovesacHomeCtrl'
	}).
	when('/series5', {
		templateUrl: '/views/lovesacViews/oneSactionalList.html',
		controller: 'oneSeries5Ctrl'
	}).
	when('/series6', {
		templateUrl: '/views/lovesacViews/oneSactionalList.html',
		controller: 'oneSeries6Ctrl'
	}).
	when('/series5/twoCouches', {
		templateUrl: '/views/lovesacViews/twoSactionalList.html',
		controller: 'twoSeries5Ctrl'
	}).
	when('/series6/twoCouches', {
		templateUrl: '/views/lovesacViews/twoSactionalList.html',
		controller: 'twoSeries6Ctrl'
	}).
	when('/series5/threeCouches', {
		templateUrl: '/views/lovesacViews/threeSactionalList.html',
		controller: 'threeSeries5Ctrl'
	}).
	when('/series6/threeCouches', {
		templateUrl: '/views/lovesacViews/threeSactionalList.html',
		controller: 'threeSeries6Ctrl'
	}).
	when('/about', {
		templateUrl: '/views/about.html',
		controller: 'aboutCtrl'
	}).
	when('/resume', {
		templateUrl: '/views/resume.html',
		controller: 'resumeCtrl'
	}).
	when('/contact', {
		templateUrl: '/views/contact.html',
		controller: 'contactCtrl'
	}).
	when('/:urlVariable', {
		templateUrl: '/views/404.html',
		controller: '404Ctrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

//http://stackoverflow.com/questions/12008908/angularjs-how-can-i-pass-variables-between-controllers
app.service('sharedProperties', function () {
	var allPiecesProperty = false;
	var bases = undefined;
	var sides = undefined;
	var width = undefined;
	var depth = undefined;

	return {
		getAllPiecesProperty: function () {
			return allPiecesProperty;
		},
		setAllPiecesProperty: function (value) {
			allPiecesProperty = value;
		},
		getBases: function () {
			return bases;
		},
		setBases: function (value) {
			bases = value;
		},
		getSides: function () {
			return sides;
		},
		setSides: function (value) {
			sides = value;
		},
		getWidth: function () {
			return width;
		},
		setWidth: function (value) {
			width = value;
		},
		getDepth: function () {
			return depth;
		},
		setDepth: function (value) {
			depth = value;
		}
	};
});