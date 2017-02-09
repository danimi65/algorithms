//jshint esversion:6

let insertionSort = (function(array) {
  if(array.length === 0){
    return array;
  }
  for(let i = 0; i < array.length; i++){
    let currentPosition = array[i];
    let j = i-1; //will be the number in front of i to compare whether it's smaller
    for(j; j >= 0 && (array[j] > currentPosition); j--){ 
      array[j+1] = array[j]; //will swap if number on the left is smaller

    }
    array[j+1] = currentPosition;

  }

});
let insertionArray = [7, 10, 2, 3, 32];
insertionSort(insertionArray);
console.log("insertionSort", insertionArray);
