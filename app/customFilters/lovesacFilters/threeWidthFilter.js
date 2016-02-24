app.filter('threeWidthFilter', function () {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

	return function (sactionalArray, widthInput) {

		var filteredSactionalArray = [];
		//		console.log("widthInput: " + widthInput);

		if (widthInput === undefined || widthInput === null) {
			filteredSactionalArray = sactionalArray;
		} else {
			if (sactionalArray) {
				for (var i = 0; i < sactionalArray.length; i++) {
	//				if (sactionalArray[i].couches[0].Width <= widthInput || sactionalArray[i].couches[1].Width <= widthInput || sactionalArray[i].couches[2].Width <= widthInput) {
					if (((sactionalArray[i].couches[0].Width) + (sactionalArray[i].couches[1].Width) + (sactionalArray[i].couches[2].Width)) <= widthInput) {
						filteredSactionalArray.push(sactionalArray[i]);
					}
				}
			}
		}
		return filteredSactionalArray;
	};
});