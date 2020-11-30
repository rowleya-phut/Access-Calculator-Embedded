console.log("disableOPM7 loaded");

//original function
// function disableOMP7(prevSelected){
//     if(prevSelected.includes("OPM7")){
//         $("#currOPM7").addClass("disabled");
//         return 1
//     } else if (prevSelected.includes("OPM5")){
//         $("#currOPM7").removeClass("disabled");
//         $("#prevOPM7").removeClass("disabled");
//         return 2
//       } else if (prevSelected.length === 0){
//         $("#currOPM7").addClass("disabled");
//         $("#prevOPM7").addClass("disabled");
//         return 3
//       } 
//     }

//refactored function to 2 functions - one which returns a value based on the array argument
//and one which then uses this returned value as an argument to manipulate the DOM through 
//jquery

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
