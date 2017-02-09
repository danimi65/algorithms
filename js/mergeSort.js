//jshint esversion: 6
function mergeSort(arr){
  let len = arr.length;
  if(len < 2){
    return arr;
  }



  let mid = Math.floor(len/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left),mergeSort(right));

}

function merge(left, right){
  let sortedArray = [],
   leftIndex = 0,
   rightIndex = 0,
   leftArr = left.length,
   rightArr = right.length;
 
  while(leftIndex < leftArr && rightIndex < rightArr){
    console.log(sortedArray);
    if(leftArr[leftIndex] < rightArr[rightIndex]){
      sortedArray.push(leftArr[leftIndex]);
      leftIndex ++;
    } else if(leftArr[leftIndex] > rightArr[rightIndex]){
      sortedArray.push(rightArr[rightIndex]);
      rightIndex ++;
    } else{
      sortedArray.push(leftArr[leftIndex]);
      leftIndex ++;
      sortedArray.push(rightArr[rightArr]);
      rightIndex ++;
    }
  }

  return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

let sortedArray = mergeSort([5, 11, 18, 2, 7]);
console.log("merger sort", sortedArray);