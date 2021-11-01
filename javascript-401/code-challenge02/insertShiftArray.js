"use strict";

let num = 16;
let arr = [42,8,15,23,42];
// let num = 5;
// let arr = [2,4,6,-8];
let newarr = [];
function insertShiftArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 == 0) {
      let p = arr.length / 2;
      if (i == p) {
        newarr.push(num);
        newarr.push(arr[i]);
      } else {
        newarr.push(arr[i]);
      }
    } else {
      let p =( arr.length + 1 )/ 2;
      if (i == p) {
        newarr.push(num);
        newarr.push(arr[i]);
      } else {
        newarr.push(arr[i]);
      }
    }
  }
}
insertShiftArray(arr, num);
console.log(newarr);
