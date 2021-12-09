'use strict';
const hash = require('./lib/hashTable');
let ht = new hash(10);
// console.log(ht.map[0],"ll");
ht.set('joe', {name:'joe'});
// console.log(ht.map[0],"ll");

ht.set('joe', {age:'20'});
ht.set('joe', {parent:'hnan & jane'});
ht.set('joe', {home:'seoul'});
console.log(ht.get("joe").value.joe.name);
console.log(ht.get("joe").next.value.joe.age);
console.log(ht.get("joe").next.next.value.joe.parent);
console.log(ht.get("joe").next.next.next.value.joe.home);