'use strict';
const pseudoQueue = require('./lib/pseudoQueue');
const qq = new pseudoQueue()
qq.push(1);
qq.push(2);
qq.push(3);
qq.enqueue(1)
console.log(qq.dequeue())
console.log(qq)



