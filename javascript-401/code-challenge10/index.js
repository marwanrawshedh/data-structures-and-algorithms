'use strict';



const stacks = require('./lib/stacks');
const queues = require('./lib/queues');

const ss = new stacks(); // create a new instance of LL
const qq = new queues()
// ll.insert(1)
// ll.insert(1)
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);
console.log(ss)
// ss.pop()
// ss.pop()
// ss.pop()
// ss.pop()
// qq.enqueue(1)
// qq.enqueue(2)
// qq.enqueue(3)
// qq.enqueue(4)
// qq.dequeue()
// qq.dequeue()


// console.log(qq)
// console.log(ll.isEmpty())
// console.log(ll);
// console.log(ll.head);
// ll.kthFromEnd()
// console.log(ll.palindrome())
