$(document).ready(function(){
    //console.log("OPAccess.js reporting")

    var prevSelected = [];
    var currSelected = [];

    // //function to add element if not in already
    // //also don't add if the course has already been taken previously
    // function addToArray(arr, value){
    //   value = value.substring(value.length -4);
    //   var index = arr.indexOf(value);
    //   console.log(value);
    //   if(index > -1){
    //     return false;
    //   } else {
    //     //if pushing "None" clear the array first but then don't add "None".
    //     if(value === "None"){
    //       arr.length = 0;
    //       console.log("The empty array is now:" + arr);
    //       return true;
    //     }
    //     arr.push(value);
    //   }
    //   return true;
    // }
    //function to remove element if in already
    // function removeFromArray(arr, value){
    //   value = value.substring(value.length -4);

      
    //   //check if trying to remove a "None" value - which is never added to an array
    //   if(value === "None"){
    //     return true;
    //   }


    //   var index = arr.indexOf(value);
    //   if(index > -1){
    //     arr.splice(index, 1);
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    // //function to disable corresponding course
    // //1. Find element with other id (e.g. if prevOPM3 find currOPM3)
    // //2. Add disabled to classes of other element
    // function disableOtherCourse(value){
    //   console.log("No previous: " + value);
    //   var selectedId = value.substring(value.length -4);
    //   var disabledId;

    //   if (value === "prevNone"){
    //   console.log("No previous: " + value);
    //   $("#prevOPM3").addClass("disabledNone");
    //   $("#prevOPM5").addClass("disabledNone");
    //   $("#prevOPM7").addClass("disabledNone");
    //   $("#prevOPM3").removeClass("prevCourseSelected");
    //   $("#prevOPM5").removeClass("prevCourseSelected");
    //   $("#prevOPM7").removeClass("prevCourseSelected");
    //   $("#prevOPM3").addClass("prevCourse");
    //   $("#prevOPM5").addClass("prevCourse");
    //   $("#prevOPM7").addClass("prevCourse");
    //   $("#currOPM3").removeClass("disabled");
    //   $("#currOPM5").removeClass("disabled");
    //   $("#currOPM7").removeClass("disabled");
    //   } else if(value.charAt(0) === "p"){
    //     disabledId = "curr" + selectedId;
    //   } else if (value.charAt(0) === "c"){
    //     disabledId = "prev" + selectedId;
    //   } else {
    //     return false;
    //   }
    //   console.log("Disabled id: " + disabledId);
    //   $("#"+disabledId).addClass("disabled"); 
    // }

    // function enableOtherCourse(value){
    //   var selectedId = value.substring(value.length -4);
    //   var enabledId;
    //   if (value === "prevNone"){
    //   $("#prevOPM3").removeClass("disabledNone");
    //   $("#prevOPM5").removeClass("disabledNone");
    //   $("#prevOPM7").removeClass("disabledNone");
    //   if($("#currOPM7").hasClass("currCourseSelected")){
    //     $("#currOPM7").removeClass("currCourseSelected");
    //     $("#currOPM7").addClass("currCourse");
    //   }
    //   } else if(value.charAt(0) === "p"){
    //     enabledId = "curr" + selectedId;
    //   } else if (value.charAt(0) === "c"){
    //     enabledId = "prev" + selectedId;
    //   } else {
    //     return false;
    //   }
    //   console.log("Enabled id: " + enabledId);
    //   if($("#"+enabledId).hasClass("disabled")){
    //     $("#"+enabledId).removeClass("disabled");
    //     return true;
    //   } 
    //   return false;
    // }


    disableOMP7DOM(disableOMP7(prevSelected), disableOMP7(currSelected));

      

    "============================================================================="

    //process click on a prev course element
    $('div.prevCourse').click(function() { 
      var elementSelected = $(this);
      //var id = $(this).attr('id');

      // //check if element disabled
      // if($(this).hasClass("disabled") || $(this).hasClass("disabledNone")){
      //   return false;
      // }

      // if($(this).hasClass("prevCourse")){
      //   $(this).removeClass("prevCourse");
      //   $(this).addClass("prevCourseSelected");
      //   var addedToPrevSelected;
      //   addedToPrevSelected =  addToArray(prevSelected, id);
      //   if(addedToPrevSelected){
      //     disableOtherCourse(id);
      //   }
      // }else if($(this).hasClass("prevCourseSelected")){
      //   $(this).removeClass("prevCourseSelected");
      //   $(this).addClass("prevCourse");
      //   var removedFromArray;
      //   removedFromArray = removeFromArray(prevSelected, id);
      //   if(removedFromArray){
      //     enableOtherCourse(id);
      //   }
      // };
      // console.log(prevSelected);
      prevSelected = disableCourse(elementSelected, "prev", prevSelected);
      disableOMP7DOM(disableOMP7(prevSelected), disableOMP7(currSelected));
      calculateAccess();
      // return; 
      
    });

    //process click on a current course element
    $('div.currCourse').click(function() { 
      var id = $(this).attr('id');

      //check if element disabled
      if($(this).hasClass("disabled") || $(this).hasClass("disabledNone")){
        return false;
      }

      if($(this).hasClass("currCourse")){
        $(this).removeClass("currCourse");
        $(this).addClass("currCourseSelected");
        var addedToCurrSelected;
        addedToCurrSelected = addToArray(currSelected, id);
        if(addedToCurrSelected){
          disableOtherCourse(id);
        }
      }else if($(this).hasClass("currCourseSelected")){
        $(this).removeClass("currCourseSelected");
        $(this).addClass("currCourse");
        var removedFromArray;
        removedFromArray = removeFromArray(currSelected, id);
        if(removedFromArray){
          enableOtherCourse(id);
        }
      }; 
      console.log(currSelected);
      disableOMP7DOM(disableOMP7(prevSelected), disableOMP7(currSelected));
      calculateAccess();
      return; 
    });

    //on clicking anywhere within the calculator update the course access requirements
    function calculateAccess(){
      console.log("Calculating access");
      var calc = $("#calculated");
      
      console.log("Previous courses " + prevSelected + " Current Courses " + currSelected);

      if(prevSelected.length === 0 && currSelected.length === 0){
        calc.text("");
      }

        if(prevSelected.length === 1){
          console.log("prevSelected length is 1");
          if(prevSelected.includes("OPM3")){
            if(currSelected.length === 1 && currSelected.includes("OPM5")){
              calc.text("OP2 Level 2 Update");
              console.log("OP2 Level 2 Update");
              //cannot do just OPM3 then OPM7 so logic not included and case not allowed by disableOPM7 function
            } 
            else if (currSelected.length === 2 && (currSelected.includes("OPM5") && currSelected.includes("OPM7"))){
              calc.text("OP2 Level 3 Update");
            }
          }
          else if(prevSelected.includes("OPM5")){
            if(currSelected.length === 1 && currSelected.includes("OPM3")){
              calc.text("OP3 Level 3.  CMG/CMH denied. Update");
            } else if (currSelected.length === 2 && (currSelected.includes("OPM3") && (currSelected.includes("OPM7")))){
              calc.text("OP3 Level 3 Update");
            }
          }
        }
        else if(prevSelected.length === 2){
          if(prevSelected.includes("OPM5") && prevSelected.includes("OPM7")){
            if(currSelected.length == 1 && currSelected.includes("OPM3")){
              calc.text("OP3 Level 3 Update");
            }
          }
        }
        else if(prevSelected.length === 0){
          if(currSelected.length === 1){
            if(currSelected.includes("OPM3")){
              calc.text("OP2 Level 1 Add.  OPR Level 2 Add");
            } else if (currSelected.includes("OPM5")) {
              calc.text("OP3 Level 1 Add.  OPR Level 3 Add");
            }
          }
          else if(currSelected.length === 2){
            if(currSelected.includes("OPM5") && currSelected.includes("OPM7")){
              calc.text("OP3 Level 2 Add. OPR Level 2 Add");
            } else if (currSelected.includes("OPM5") && currSelected.includes("OPM3")){
              calc.text("OP2 Level 2 Add. OPR Level 2 Add");
            }   
            //can't do OPM3 and OPM7 alone (without OPM5)         
          }
          else if(currSelected.length === 3){
            calc.text("OP2 Level 3 Add. OPR Level 2 Add");
          }

        }
    }
      //TODO - course message upon selecting or deselecting OPM7

      

  });