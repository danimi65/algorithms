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
### best case scenario


### worst case scenario


## 2. Insertion Sort
Insertion sort is when we order a list of numbers by taking one number at a time and comparing it to each number in the list. Insertion sort starts at the beginning of the list and checks to see if the number to the right of it is smaller. If it is, it will go to the next number and see if that number is also smaller, while still holding on to the original number; it will continue to do this until it finds a number that is larger than the number being held. Then, it will place the number in front of that larger number and start again with the next number in the list. 

### Pseudo code

```
function insertion sort(array)
for i = 0 to length array
current position = array[i] //holds current position
for j = i - 1 -- to length of array // compares number in front of i
swap(array[j+1], array[j]) // swap if number on left is smaller

end for j

set array[j+ 1] = current position

end for i





