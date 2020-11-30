function enableOtherCourse(value){
    var selectedId = value.substring(value.length -4);
    var enabledId;
    if(value.charAt(0) === "p"){
      enabledId = "curr" + selectedId;
    } else if (value.charAt(0) === "c"){
      enabledId = "prev" + selectedId;
    } 
    //console.log("Enabled id: " + enabledId);
    if($("#"+enabledId).hasClass("disabled")){
      $("#"+enabledId).removeClass("disabled");
      return true;
    } 
  }