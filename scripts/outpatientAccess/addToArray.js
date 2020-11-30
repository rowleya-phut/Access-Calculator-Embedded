console.log("addToArrayLoaded");

//function to add element if not in already
//also don't add if the course has already been taken previously
function addToArray(arr, value){
    value = value.substring(value.length -4);
    var index = arr.indexOf(value);
    //console.log(value);
    if(index > -1){
        return false;
    } else {
        arr.push(value);
    }
    return true;
    }