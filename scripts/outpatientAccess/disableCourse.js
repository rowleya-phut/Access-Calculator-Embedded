console.log("disableCourse loaded");

//process click on a prev course element

function disableCourse(elementSelected, selectedArray){
    
    var id = elementSelected.attr('id');
    var thisClass = elementSelected.attr("class")
    var prefix = thisClass.substring(0,4);
    //console.log("thisClass is " + prefix);
    //console.log("ID inside disable course function is " + id);

    //check if element disabled just return the array as is
    if(elementSelected.hasClass("disabled")){
      return selectedArray;
    }

    //if course is unselected - make selected and disable the corresponding course etc
    if (elementSelected.hasClass(prefix + "Course")){
        elementSelected.removeClass(prefix + "Course");
        elementSelected.addClass(prefix + "CourseSelected");
      var addedToSelected;
      addedToSelected =  addToArray(selectedArray, id);
      if(addedToSelected){
        disableOtherCourse(id);
      }
    } else if (elementSelected.hasClass(prefix + "CourseSelected")) {
        elementSelected.removeClass(prefix + "CourseSelected");
        elementSelected.addClass(prefix + "Course");
      var removedFromArray;
      removedFromArray = removeFromArray(selectedArray, id);
      if(removedFromArray){
        enableOtherCourse(id);
      }
    };

    //if course has been disabled for any reason - set to deselected

    //console.log(selectedArray);
    return selectedArray; 
}

