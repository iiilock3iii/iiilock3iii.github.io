app.controller('lovesacHomeCtrl', function ($scope, $http, sharedProperties) {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry
	
	sharedProperties.setAllPiecesProperty(false);
	sharedProperties.setBases(undefined);
	sharedProperties.setSides(undefined);
	sharedProperties.setWidth(undefined);
	sharedProperties.setDepth(undefined);
});