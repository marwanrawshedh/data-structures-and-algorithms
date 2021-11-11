"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.final = null;
    this.head = null;
    this.tail = null;
    this.head1 = null;
    this.tail1 = null;
    // this.count = 0;
  }

  /**
   * A function that will append a node to the end of the linkedList
   *
   * @param {any} value
   */
  append1(value) {
    if (!this.head1) {
      // add the new node into our empty LL
      // and point the head to that new node
      this.head1 = new Node(value);
      this.tail1 = this.head1;
    } else {
      // need to create the new node
      const newNode = new Node(value);
      this.tail1.next = newNode;

      this.tail1 = this.tail1.next;
    }
  }
  append(value) {
    if (!this.head) {
      // add the new node into our empty LL
      // and point the head to that new node
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      // need to create the new node
      const newNode = new Node(value);
      this.tail.next = newNode;

      this.tail = this.tail.next;
    }
  }
  zipLists(head, head1) {
    let currentNode = head;
    let currentNode1 = this.head1;
    let m = this.final;
    let i = 0;

    while (i<3) {
      i++;
      // console.log(currentNode1, "pp");
      // console.log(currentNode1,2)
      console.log(currentNode1)
      console.log(currentNode)
      if (currentNode) {
        m= currentNode;
        currentNode = currentNode.next;
        // console.log(m)
        // this.final = this.final.next;
        
        m=m.next 
      }
      if (currentNode1) {
        // console.log(i)
        m = currentNode1;
        currentNode1 = currentNode1.next;
      }
      
    }
    // console.log(this.head,"k")
    console.log(this, "finaaal");
    // return this
  }

 
}
module.exports = LinkedList;

