app.filter('threeBasesFilter', function () {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

	return function (sactionalArray, basesInput, useAllPiecesCheckbox, noDuplicatesCheckbox) {

		var filteredSactionalArray = [];
		//		console.log("basesInput: " + basesInput);

		if (basesInput === undefined || basesInput === null) {
			filteredSactionalArray = sactionalArray;
		} else {
			if (sactionalArray) {
				for (var i = 0; i < sactionalArray.length; i++) {
					if (((sactionalArray[i].couches[0].Bases) + (sactionalArray[i].couches[1].Bases) + (sactionalArray[i].couches[2].Bases)) <= parseInt(basesInput)) {
						filteredSactionalArray.push(sactionalArray[i]);
					}
				}
			}
		}

		if (useAllPiecesCheckbox === true) { //filter on input exactly

			filteredSactionalArray = [];
			if (basesInput === undefined || basesInput === null) {
				filteredSactionalArray = sactionalArray;
			} else {
				if (sactionalArray) {
					for (var i = 0; i < sactionalArray.length; i++) {
						if (((sactionalArray[i].couches[0].Bases) + (sactionalArray[i].couches[1].Bases) + (sactionalArray[i].couches[2].Bases)) === parseInt(basesInput)) {
							filteredSactionalArray.push(sactionalArray[i]);
						}
					}
				}
			}
		}
		
		var noDupesFilteredSactionalArray = [];
		
		if (noDuplicatesCheckbox === true) {
			if (filteredSactionalArray) {
				for (var i = 0; i < filteredSactionalArray.length; i++) {
					if ((filteredSactionalArray[i].couches[0].Name == filteredSactionalArray[i].couches[1].Name) || (filteredSactionalArray[i].couches[1].Name == filteredSactionalArray[i].couches[2].Name) || (filteredSactionalArray[i].couches[0].Name == filteredSactionalArray[i].couches[2].Name)) {
						//do nothing
					} else {
				noDupesFilteredSactionalArray.push(filteredSactionalArray[i]);
					}
				}
			}
			filteredSactionalArray = noDupesFilteredSactionalArray;
		}

		return filteredSactionalArray;
	};
});