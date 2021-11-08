'use strict';


const LinkedList = require('./lib/linkedList');



const ll = new LinkedList(); // create a new instance of LL
// ll.insert(1)
// ll.insert(1)
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
// ll.append(5);
// ll.append(6);
// ll.append(7);
// ll.append(8);
// ll.append(9);
// ll.append(10);
// ll.append(11);
// ll.toString()
// console.log(ll)
// ll.insertBefore(4,22)
// ll.insertAfter(2,22)
console.log(ll.toString());
console.log(ll);
console.log(ll.kthFromEnd(3))
// console.log(ll)
