"use strict";
let num = 4;
let arr = [1,2,3,4,5];
function BinarySearch(arr, num) {
    let firstnum = 0;
    let length = arr.length;
    while (firstnum < length) {
        console.log(firstnum,length)
        let m = Math.floor((firstnum + length) / 2);
        if (arr[m] < num) {
        firstnum = m + 1;console.log(firstnum,"hi")
    } else {console.log(m,"n")
        length = m;
    }
}
// console.log(length)
if(arr[length]!=num){return -1}
else{
return length}
}
console.log(BinarySearch(arr,num),"finish")

