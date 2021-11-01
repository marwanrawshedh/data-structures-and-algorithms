'use strict'
const arr=[1, 2, 3, 4, 5, 6]
const newarr=[]
const reversearray=(arr)=>{
for(let i=arr.length-1;i>=0;i--){

    newarr.push(arr[i])
}
};
reversearray(arr)
console.log(newarr)