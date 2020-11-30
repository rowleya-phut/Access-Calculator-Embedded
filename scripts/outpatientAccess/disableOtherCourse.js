//function to disable corresponding course
    //1. Find element with other id (e.g. if prevOPM3 find currOPM3)
    //2. Add disabled to classes of other element
    function disableOtherCourse(value){
        //console.log("No previous: " + value);
        var selectedId = value.substring(value.length -4);
        var disabledId;
      if(value.charAt(0) === "p"){
          disabledId = "curr" + selectedId;
        } else if (value.charAt(0) === "c"){
          disabledId = "prev" + selectedId;
        }
        //console.log("Disabled id: " + disabledId);
        $("#"+disabledId).addClass("disabled"); 
      }