app.filter('oneBasesFilter', function () {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

	return function (sactionalArray, basesInput, useAllPiecesCheckbox) {

		var filteredSactionalArray = [];
		//		console.log("basesInput: " + basesInput);

		if (basesInput === undefined || basesInput === null) {
			filteredSactionalArray = sactionalArray;
		} else {
			if (sactionalArray) {
				for (var i = 0; i < sactionalArray.length; i++) {
					if (sactionalArray[i].Bases <= parseInt(basesInput)) {
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
						if (sactionalArray[i].Bases === parseInt(basesInput)) {
							filteredSactionalArray.push(sactionalArray[i]);
						}
					}
				}
			}
		}
		return filteredSactionalArray;
	};
});