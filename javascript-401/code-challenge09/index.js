'use strict';


const LinkedList = require('./lib/linkedList');



const ll = new LinkedList(); // create a new instance of LL
// ll.insert(1)
// ll.insert(1)
ll.append(1);
ll.append(2);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(5);
ll.append(4);
ll.append(3);
ll.append(2);
ll.append(2);
ll.append(1);

// console.log(ll);
// console.log(ll.head);
// ll.kthFromEnd()
console.log(ll.palindrome())
