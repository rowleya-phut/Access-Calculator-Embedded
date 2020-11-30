//if course has been disabled for any reason - set to deselected
//also remove from the array!
function cleanUpSelected(prevArray, currArray){
    
    var elementArray = ["prevOPM3", "prevOPM5", "prevOPM7"];
    var element;
    for (var i = 0; i < elementArray.length; i++){
        elString = elementArray[i];
        element = $("#"+elementArray[i]);
        // console.log(element);
        if(element.hasClass("disabled") && element.hasClass("prevCourseSelected")){
            //console.log(element.attr("id")  + " is both selected & disabled");
            element.removeClass("prevCourseSelected");
            element.addClass("prevCourse");
            removeFromArray(prevArray, elString)
        }
    }

    var elementArray = ["currOPM3", "currOPM5", "currOPM7"];
    for (var i = 0; i < elementArray.length; i++){
        elString = elementArray[i]
        element = $("#"+elementArray[i]);
        // console.log(element);
        if(element.hasClass("disabled") && element.hasClass("currCourseSelected")){
            //console.log(element.attr("id")  + " is both selected & disabled");
            element.removeClass("currCourseSelected");
            element.addClass("currCourse");
            //console.log("element to remove is: " + elString + " from: " + currArray);
            removeFromArray(currArray, elString)
        }
    }
}