'use strict'
const HashMap = require('./hashTable')

let ht1={
  "fond": "averse",
  "wrath": "delight",
  "diligent": "idle",
  "guide": "follow",
  "flow": "jam",
  
}
let ht2={
  "fond": "averse",
  "wrath": "delight",
  "diligent": "idle",
  "guide": "follow",
  "flow": "jam",

}

  
function leftJoin(ht1, ht2) {

let result = {};
for (let key in ht1) {
  result[key] = [ht1[key]];
}
for (let key in ht2) {
  if (result[key]) {
    result[key].push(ht2[key]);
  } else {
    result[key] = [null, ht2[key]];
  }
}
return result;
}
  module.exports = leftJoin
  console.log(leftJoin(ht1, ht2));