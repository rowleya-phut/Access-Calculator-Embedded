function calculateAccess(prevSelected, currSelected){
    console.log("Calculating access");
    
    console.log("prevSelected: " + prevSelected);
    console.log("currSelected: " + currSelected);

    if(currSelected.length === 0){
      return "";
    }

      if(prevSelected.length === 1){
        //console.log("prevSelected length is 1");
        if(prevSelected.includes("OPM3")){
          if(currSelected.length === 1 && currSelected.includes("OPM5")){
            return "OP2 Level 2 Update";
            //cannot do just OPM3 then OPM7 so logic not included and case not allowed by disableOPM7 function
          } 
          else if (currSelected.length === 2 && (currSelected.includes("OPM5") && currSelected.includes("OPM7"))){
            return "OP2 Level 3 Update";
          }
        }
        else if(prevSelected.includes("OPM5")){
          if(currSelected.length === 1 && currSelected.includes("OPM3")){
            return "OP3 Level 3.  CMG/CMH denied. Update";
          } else if (currSelected.length === 1 && currSelected.includes("OPM7")){
            return "OP3 Level 2 Update";
          } else if (currSelected.length === 2 && (currSelected.includes("OPM3") && (currSelected.includes("OPM7")))){
            return "OP3 Level 3 Update";
          }
        }
      }
      else if(prevSelected.length === 2){
        if(prevSelected.includes("OPM5") && prevSelected.includes("OPM7")){
          if(currSelected.length == 1 && currSelected.includes("OPM3")){
            return "OP3 Level 3 Update";
          }
        } else if(prevSelected.includes("OPM3") && prevSelected.includes("OPM5")){
          if(currSelected.length == 1 && currSelected.includes("OPM7")){
            return "OP2 Level 3 Update";
          }
        }
      }
      else if(prevSelected.length === 0){
        if(currSelected.length === 1){
          if(currSelected.includes("OPM3")){
            return "OP2 Level 1 Add.  OPR Level 2 Add";
          } else if (currSelected.includes("OPM5")) {
            return "OP3 Level 1 Add.  OPR Level 2 Add";
          }
        }
        else if(currSelected.length === 2){
          if(currSelected.includes("OPM5") && currSelected.includes("OPM7")){
            return "OP3 Level 2 Add. OPR Level 2 Add";
          } else if (currSelected.includes("OPM5") && currSelected.includes("OPM3")){
            return "OP2 Level 2 Add. OPR Level 2 Add";
          }   
          //can't do OPM3 and OPM7 alone (without OPM5)         
        }
        else if(currSelected.length === 3){
          return "OP2 Level 3 Add. OPR Level 2 Add";
        }

      }
  }
  
  module.exports = calculateAccess;