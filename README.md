# algorithms

## 1. Bubble Sort
Bubble sort is when we look at a list of numbers and order them from smallest number to biggest number. We do this by starting from the beginning of the list and looking at the first two numbers. If the number on the left is bigger than the number on the right, then we switch the numbers so that the smaller one is in the front; if the number on the left is smaller, then we leave the two numbers as they are and move on to the next two numbers in the list. We continue to go down the list, looking at two numbers at a time, until all the numbers are in order. 

### Pseudo code

```
function bubbleSort(array)
  set swap to false //while array is not in order
    do for i = 0 to length array
      if array[i] > array[i + 1] //if the number at the current position is larger than the number to the right of it 
      temp = array[i] //holds current position
      swap(array[i], array[i + 1])
      swapped = true

    end if

  end for

while swap is true

```



