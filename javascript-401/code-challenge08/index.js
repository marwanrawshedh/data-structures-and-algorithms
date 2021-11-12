'use strict';


const LinkedList = require('./lib/zipLinkedList.js.js');



const ll = new LinkedList(); // create a new instance of LL
// ll.insert(1)
// ll.insert(1)
// ll.append(1);
// ll.append(2);
// ll.append(3);
ll.append(4);
// ll.append1(5);
// ll.append1(6);
// ll.append1(7); 
// ll.append1(8);
ll.zipLists(ll.head,ll.head1,ll.head)
console.log(ll);

