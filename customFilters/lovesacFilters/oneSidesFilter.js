app.filter('oneSidesFilter', function () {
	
//	Copyright (C) 2015 Collin Welker
//	Notarized 12/06/2015 by Mark Hendry

	return function (sactionalArray, sidesInput, useAllPiecesCheckbox) {

		var filteredSactionalArray = [];
		//		console.log("sidesInput: " + sidesInput);

		if (sidesInput === undefined || sidesInput === null) {
			filteredSactionalArray = sactionalArray;
		} else {
			if (sactionalArray) {
				for (var i = 0; i < sactionalArray.length; i++) {
					if (sactionalArray[i].Sides <= parseInt(sidesInput)) {
						filteredSactionalArray.push(sactionalArray[i]);
					}
				}
			}
		}

		if (useAllPiecesCheckbox === true) { //filter on input exactly

			filteredSactionalArray = [];
			if (sidesInput === undefined || sidesInput === null) {
				filteredSactionalArray = sactionalArray;
			} else {
				if (sactionalArray) {
					for (var i = 0; i < sactionalArray.length; i++) {
						if (sactionalArray[i].Sides === parseInt(sidesInput)) {
							filteredSactionalArray.push(sactionalArray[i]);
						}
					}
				}
			}
		}
		//had to hardcode displaying the noSactionals div, because ng-hide="!sactionals.length" was not working, possibly because of the custom directive
		if (filteredSactionalArray) {
			if (filteredSactionalArray.length === 0) {
				$(".noSactionals").css("display","inline");
			} else {
				$(".noSactionals").css("display","none");
			}
		}
		return filteredSactionalArray;
	};
});