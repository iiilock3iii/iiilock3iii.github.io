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
}).filter('oneDepthFilter', function () {

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
}).filter('oneSidesFilter', function () {

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
}).filter('oneWidthFilter', function () {

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
          if (sactionalArray[i].Width <= widthInput) {
            filteredSactionalArray.push(sactionalArray[i]);
          }
        }
      }
    }
    return filteredSactionalArray;
  };
}).filter('threeBasesFilter', function () {

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
}).filter('threeDepthFilter', function () {

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
          //				if (sactionalArray[i].couches[0].Depth <= depthInput || sactionalArray[i].couches[1].Depth <= depthInput || sactionalArray[i].couches[2].Depth <= depthInput) {
          if (((sactionalArray[i].couches[0].Depth) + (sactionalArray[i].couches[1].Depth) + (sactionalArray[i].couches[2].Depth)) <= depthInput) {
            filteredSactionalArray.push(sactionalArray[i]);
          }
        }
      }
    }
    return filteredSactionalArray;
  };
}).filter('threeSidesFilter', function () {

  //	Copyright (C) 2015 Collin Welker
  //	Notarized 12/06/2015 by Mark Hendry

  return function (sactionalArray, sidesInput, useAllPiecesCheckbox, noDuplicatesCheckbox) {

    var filteredSactionalArray = [];
    //		console.log("sidesInput: " + sidesInput);

    if (sidesInput === undefined || sidesInput === null) {
      filteredSactionalArray = sactionalArray;
    } else {
      if (sactionalArray) {
        for (var i = 0; i < sactionalArray.length; i++) {
          if (((sactionalArray[i].couches[0].Sides) + (sactionalArray[i].couches[1].Sides) + (sactionalArray[i].couches[2].Sides)) <= parseInt(sidesInput)) {
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
            if (((sactionalArray[i].couches[0].Sides) + (sactionalArray[i].couches[1].Sides) + (sactionalArray[i].couches[2].Sides)) === parseInt(sidesInput)) {
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


    //had to hardcode displaying the noSactionals div, because ng-hide="!sactionals.length" was not working, possibly because of the custom directive
    if (filteredSactionalArray) {
      if (filteredSactionalArray.length === 0) {
        $(".noSactionals").css("display", "inline");
      } else {
        $(".noSactionals").css("display", "none");
      }
    }

    return filteredSactionalArray;
  };
}).filter('threeWidthFilter', function () {

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
}).filter('twoBasesFilter', function () {

  //	Copyright (C) 2015 Collin Welker
  //  Notarized 12/06/2015 by Mark Hendry

  return function (sactionalArray, basesInput, useAllPiecesCheckbox, noDuplicatesCheckbox) {

    var filteredSactionalArray = [];
    //		console.log("basesInput: " + basesInput);

    if (basesInput === undefined || basesInput === null) {
      filteredSactionalArray = sactionalArray;
    } else {
      if (sactionalArray) {
        for (var i = 0; i < sactionalArray.length; i++) {
          if (((sactionalArray[i].couches[0].Bases) + (sactionalArray[i].couches[1].Bases)) <= parseInt(basesInput)) {
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
            if (((sactionalArray[i].couches[0].Bases) + (sactionalArray[i].couches[1].Bases)) === parseInt(basesInput)) {
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
          if (filteredSactionalArray[i].couches[0].Name == filteredSactionalArray[i].couches[1].Name) {
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
}).filter('twoDepthFilter', function () {

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
          //				if (sactionalArray[i].couches[0].Depth <= depthInput || sactionalArray[i].couches[1].Depth <= depthInput) {
          if (((sactionalArray[i].couches[0].Depth) + (sactionalArray[i].couches[1].Depth)) <= depthInput) {
            filteredSactionalArray.push(sactionalArray[i]);
          }
        }
      }
    }
    return filteredSactionalArray;
  };
}).filter('twoSidesFilter', function () {

  //	Copyright (C) 2015 Collin Welker
  //	Notarized 12/06/2015 by Mark Hendry

  return function (sactionalArray, sidesInput, useAllPiecesCheckbox, noDuplicatesCheckbox) {

    var filteredSactionalArray = [];
    //		console.log("sidesInput: " + sidesInput);

    if (sidesInput === undefined || sidesInput === null) {
      filteredSactionalArray = sactionalArray;
    } else {
      if (sactionalArray) {
        for (var i = 0; i < sactionalArray.length; i++) {
          if (((sactionalArray[i].couches[0].Sides) + (sactionalArray[i].couches[1].Sides)) <= parseInt(sidesInput)) {
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
            if (((sactionalArray[i].couches[0].Sides) + (sactionalArray[i].couches[1].Sides)) === parseInt(sidesInput)) {
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
          if (filteredSactionalArray[i].couches[0].Name == filteredSactionalArray[i].couches[1].Name) {
            //do nothing
          } else {
            noDupesFilteredSactionalArray.push(filteredSactionalArray[i]);
          }
        }
      }
      filteredSactionalArray = noDupesFilteredSactionalArray;
    }

    //had to hardcode displaying the noSactionals div, because ng-hide="!sactionals.length" was not working, possibly because of the custom directive
    if (filteredSactionalArray) {
      if (filteredSactionalArray.length === 0) {
        $(".noSactionals").css("display", "inline");
      } else {
        $(".noSactionals").css("display", "none");
      }
    }

    return filteredSactionalArray;
  };
}).filter('twoWidthFilter', function () {

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
          //				if (sactionalArray[i].couches[0].Width <= widthInput || sactionalArray[i].couches[1].Width <= widthInput) {
          if (((sactionalArray[i].couches[0].Width) + (sactionalArray[i].couches[1].Width)) <= widthInput) {
            filteredSactionalArray.push(sactionalArray[i]);
          }
        }
      }
    }
    return filteredSactionalArray;
  };
});