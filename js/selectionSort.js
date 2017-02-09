//jshint esversion: 6

function selectionSort(arr){
  if(arr.length === 0){
    return arr;
  }

  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){ 
      if(arr[j] < arr[i]){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] =temp;
       
      }
    }
   

    
  }
  return arr;
}

let selectionArray = [7, 10, 2, 3, 32];
selectionSort(selectionArray);
console.log("selection sort", selectionArray);