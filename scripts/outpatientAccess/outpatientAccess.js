$(document).ready(function(){
    //console.log("OPAccess.js reporting")

    var prevSelected = [];
    var currSelected = [];

    //initially disable the OPM7 blocks as they need pre-req of OPM5 to select
    disableOMP7DOM(disableOMP7(prevSelected), disableOMP7(currSelected));

    //process click on a course element
    $('#CalcSelectables > div').click(function(evt) { 
      console.log("CLICK");

      var elementSelected = $(this);
      var thisId = elementSelected.attr('id');
      //console.log("thisId is " + thisId);
      var courseState = thisId.substring(0,4);
      //console.log("Course state is " + courseState);
      if( courseState === "prev"){
        prevSelected = disableCourse(elementSelected, prevSelected);
      } else if (courseState === "curr") {
        currSelected = disableCourse(elementSelected, currSelected);
      }
      
      disableOMP7DOM(disableOMP7(prevSelected), disableOMP7(currSelected));

      //clean up any anomolous elements that are both selected and disabled
      cleanUpSelected(prevSelected, currSelected);

      $("#calculated").text(calculateAccess(prevSelected, currSelected));
      
      //console.log("PRevious courses selected: " + prevSelected);
      //console.log("Current courses selected: " + currSelected);
    });   
  });