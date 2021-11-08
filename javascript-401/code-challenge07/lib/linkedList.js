"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  /**
   * A function that will append a node to the end of the linkedList
   *
   * @param {any} value
   */
  append(value) {
    if (!this.head) {
      // add the new node into our empty LL
      // and point the head to that new node
      this.head = new Node(value);

      this.tail = this.head;
      this.tail.index = this.count;
      // this.count+=1
    } else {
      this.count += 1;
      // need to create the new node
      const newNode = new Node(value);
      this.tail.next = newNode;

      this.tail = this.tail.next;
      this.tail.index = this.count;
    }
  }
  kthFromEnd(k) {
    let res = "Exception";
    
    let currentnode = this.head;
    let value = this.head;
   
    while (currentnode) {
    
      
      if (k == (this.count - value.index)){ 

      res = currentnode.value;
     
      return res;}
      currentnode = currentnode.next;
      value = value.next;
    }
    return res;
  }
  toString() {
    let currntNode = this.head;
    let string = "";
    if (this.head) {
      // if condition to prevent from error check if the linked list is empty
      let currntValue = this.head.value;
      let currntValue1 = this.head.index;
      while (currntNode) {
        string += `{ ${currntValue},${currntValue1} } -> `;

        currntNode = currntNode.next;
        if (currntNode) {
          //check if we reached the last node
          currntValue = currntNode.value;
          currntValue1 = currntNode.index;
        } else {
          string += "null";
        }
      }
    }
    return string;
  }
}
module.exports = LinkedList;
