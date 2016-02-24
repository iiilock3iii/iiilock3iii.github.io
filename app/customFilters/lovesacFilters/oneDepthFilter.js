app.filter('oneDepthFilter', function () {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

	return function (sactionalArray, depthInput) {

		var filteredSactionalArray = [];
		//		console.log("depthInput: " + depthInput);

		if (depthInput === undefined || depthInput === null) {
			filteredSactionalArray = sactionalArray;
		} else {
			if (sactionalArray) {
				for (var i = 0; i < sactionalArray.length; i++) {
					if (sactionalArray[i].Depth <= depthInput) {
						filteredSactionalArray.push(sactionalArray[i]);
					}
				}
			}
		}
		return filteredSactionalArray;
	};
});