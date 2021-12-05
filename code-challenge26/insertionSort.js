'use strict'
  const insertionSort= (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
  console.log( insertionSort([5,9,7,8,3,2,14,5,9,7,3]))
module.exports= insertionSort;