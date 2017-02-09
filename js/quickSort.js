
//jshint esversion: 6


let arr = [7, 10, 2, 3, 32];

let quickSort = (function(array){
    let left = []; 
    let right = [];

  if(array.length === 0){
    console.log("array", array);
    return array;
  }
    let pivot = array[0];

  for(var i = 1; i < array.length; i++){
    console.log("pivot", pivot);
    if(array[i] < pivot){
      left.push(array[i]);
      console.log("left", left);
    } else {
        right.push(array[i]);
        console.log("right", right);     
    }
    
  
  }
    let sortedArray = quickSort(left).concat(pivot, quickSort(right));
    console.log("finished stuff", sortedArray);
     return sortedArray;
});

  quickSort(arr);


