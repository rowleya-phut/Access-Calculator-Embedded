console.log("disableOPM7DOM loaded");

//mocked function - disconnected from dom for testing
// function disableOMP7DOM(prevArrayValue, currArrayValue){

//     if(prevArrayValue == 1 && currArrayValue == 1){
//         return("disable prevOPM7 and currOPM7");
//     } else if (prevArrayValue == 2 && currArrayValue == 1){
//         return("enable prevOPM7 and currOPM7");
//     } else if (prevArrayValue == 3 && currArrayValue == 1){
//         return("not selectable");
//     } else if (prevArrayValue == 4 && currArrayValue == 1){
//         return("disable currOPM7");
//     } else if (prevArrayValue == 5 && currArrayValue == 1){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 1 && currArrayValue == 2){
//         return("disable prevOPM7 and enable currOPM7");
//     } else if (prevArrayValue == 2 && currArrayValue == 2){
//         return("not selectable");
//     } else if (prevArrayValue == 3 && currArrayValue == 2){
//         return("not selectable");
//     } else if (prevArrayValue == 4 && currArrayValue == 2){
//         return("not selectable");
//     } else if (prevArrayValue == 5 && currArrayValue == 2){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 1 && currArrayValue == 3){
//         return("not selectable");
//     } else if (prevArrayValue == 2 && currArrayValue == 3){
//         return("disable prevOPM7");
//     } else if (prevArrayValue == 3 && currArrayValue == 3){
//         return("not selectable");
//     } else if (prevArrayValue == 4 && currArrayValue == 3){
//         return("not selectable");
//     } else if (prevArrayValue == 5 && currArrayValue == 3){
//         return("disable prevOPM7, disable currOPM7");
//     }  else if (prevArrayValue == 1 && currArrayValue == 4){
//         return("disable prevOPM7");
//     } else if (prevArrayValue == 2 && currArrayValue == 4){
//         return("not selectable");
//     } else if (prevArrayValue == 3 && currArrayValue == 4){
//         return("not selectable");
//     } else if (prevArrayValue == 4 && currArrayValue == 4){
//         return("not selectable");
//     } else if (prevArrayValue == 5 && currArrayValue == 4){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 1 && currArrayValue == 5){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 2 && currArrayValue == 2){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 3 && currArrayValue == 5){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 4 && currArrayValue == 5){
//         return("disable prevOPM7, disable currOPM7");
//     } else if (prevArrayValue == 5 && currArrayValue == 5){
//         return("disable prevOPM7, disable currOPM7");
//     } else {
//         return "FAILED";
//     }
//   }


//mocked function - disconnected from dom for testing
function disableOMP7DOM(prevArrayValue, currArrayValue){

    if(prevArrayValue == 1 && currArrayValue == 1){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("disable prevOPM7 and currOPM7");
    } else if (prevArrayValue == 2 && currArrayValue == 1){
        $("#prevOPM7").removeClass("disabled");
        $("#currOPM7").removeClass("disabled");
        return("enable prevOPM7 and currOPM7");
    } else if (prevArrayValue == 3 && currArrayValue == 1){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 4 && currArrayValue == 1){
        $("#prevOPM7").removeClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("disable currOPM7");
    } else if (prevArrayValue == 5 && currArrayValue == 1){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 1 && currArrayValue == 2){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").removeClass("disabled");
        return("disable prevOPM7 and enable currOPM7");
    } else if (prevArrayValue == 2 && currArrayValue == 2){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 3 && currArrayValue == 2){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 4 && currArrayValue == 2){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 5 && currArrayValue == 2){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 1 && currArrayValue == 3){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 2 && currArrayValue == 3){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").removeClass("disabled");
        return("disable prevOPM7");
    } else if (prevArrayValue == 3 && currArrayValue == 3){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 4 && currArrayValue == 3){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 5 && currArrayValue == 3){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    }  else if (prevArrayValue == 1 && currArrayValue == 4){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").removeClass("disabled");
        return("disable prevOPM7");
    } else if (prevArrayValue == 2 && currArrayValue == 4){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 3 && currArrayValue == 4){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 4 && currArrayValue == 4){
        $("#prevOPM7").addClass("disabled");
        $("#currOPM7").addClass("disabled");
        return("not selectable");
    } else if (prevArrayValue == 5 && currArrayValue == 4){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 1 && currArrayValue == 5){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 2 && currArrayValue == 5){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 3 && currArrayValue == 5){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 4 && currArrayValue == 5){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else if (prevArrayValue == 5 && currArrayValue == 5){
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return("disable prevOPM7, disable currOPM7");
    } else {
        // $("#prevOPM7").addClass("disabled");
        // $("#currOPM7").addClass("disabled");
        return "FAILED";
    }
  }

//module.exports = disableOMP7DOM;