console.log("removeFromArrayLoaded");

function removeFromArray(arr, value){
    value = value.substring(value.length -4);
    
    var index = arr.indexOf(value);
    if(index > -1){
      arr.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }