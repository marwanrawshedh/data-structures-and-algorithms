"use strict";
const mergesort = (arr) => {
  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);

    let right = arr.slice(mid, n);
    mergesort(left);
    mergesort(right);
    merge(left, right, arr);
  }
  return arr;
};
const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  
  if (i === left.length) {
    arr.splice(k, right.length - j, ...right.slice(j));
  } else {
    arr.splice(k, left.length - i, ...left.slice(i));
  }
 
};

console.log(
  mergesort([8,4,23,42,16,15])
);

module.exports = mergesort;
