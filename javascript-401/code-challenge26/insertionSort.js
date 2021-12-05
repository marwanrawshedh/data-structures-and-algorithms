"use strict";
const insertionSort = (arr) => {
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
};

// const reverseSorted = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1;
//     let temp = arr[i];
//     while (j >= 0 && temp > arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// };
// const fewUniques = (arr) => {
//   insertionSort(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

module.exports = { insertionSort, reverseSorted , fewUniques};
