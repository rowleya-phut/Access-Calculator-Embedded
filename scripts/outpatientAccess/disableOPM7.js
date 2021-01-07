console.log("disableOPM7 loaded");

function disableOMP7(selected){

  //e.g. take OPM3 out of the selected array before doing logic as its selection is not relevant to OPM7's disablement
  if(selected.includes("OPM3")){
    selected = selected.filter(course => !course.includes("3"));
  }

  if(selected.length == 0){
      return 1;
  } else if (selected.includes("OPM5") && selected.length == 1){
      return 2;
  } else if (selected.includes("OPM7") && selected.length == 1){
      return 3;
  } else if (selected.includes("OPM5") && selected.includes("OPM7") && selected.length == 2){
      return 4;
  } else {
      return 5;
  }
}


// module.exports = disableOMP7;
