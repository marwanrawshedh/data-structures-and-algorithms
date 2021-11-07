"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    } else {
      // need to create the new node
      const newNode = new Node(value);
      this.tail.next = newNode;

      this.tail = this.tail.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let lastnode = this.head;

    while (currentNode) {
      if (currentNode.value == value) {
        lastnode = currentNode.next;
        currentNode.next = newNode;
        currentNode.next.next = lastnode;

        return this;
      } else {
        lastnode = lastnode.next;

        currentNode = currentNode.next;
      }
    }
    return this;
  }
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let previos = this.head;
    let i = 0;
    while (currentNode) {
      i += 1;
      if (currentNode.value == value) {
        if (i == 1) {
          let lastnode = newNode;
          lastnode.next = previos;
          this.head = lastnode;

          return this;
        } else {
          let lastnode = newNode;
          lastnode.next = currentNode;

          previos.next = lastnode;
          return this;
        }
      } else {
        previos = currentNode;
        currentNode = currentNode.next;
      }
    }

    return this;
  }
  toString() {
    let currntNode = this.head;
    let string = "";
    if (this.head) {
      // if condition to prevent from error check if the linked list is empty
      let currntValue = this.head.value;
  
      while (currntNode) {
        string += `{ ${currntValue} } -> `;
  
        currntNode = currntNode.next;
        if (currntNode) {
          //check if we reached the last node
          currntValue = currntNode.value;
        } else {
          string += "null";
        }
      }
    }
    return string;
  }
}
module.exports = LinkedList;
//   append(value) {
//     // Algorithm
//     // create a new node
//     const newNode = new Node(value);

//     // check if the linked list is empty
//     if (!this.head) {
//       // if empty, point that linked list to be the head of the linked list
//       this.head = newNode; // make the newly created node our first node in our Linked List

//       return this; // return the linkedList
//     }

//     // if its not empty then you need to find the last node, or the node that the next value is null.
//     let currentNode = this.head; //this will be our pointer, indicator while we ware traversing through the linked List
//     // traverse the Linked list and  find the node that the next value of it is null (traversing)
// // console.log(value)
//     while (currentNode.next) {
//       // while the next node is not empty, make the current node move to th next node
//       currentNode = currentNode.next;
//     }
//     // once found, link that node to the newly created node

//     currentNode.next = newNode;

//     // return the LinkedList

//     return this;
//   }

// insert(value) {
//   const newnode = new Node(value);
//   if (!this.head) {
//     this.head = newnode;
//     return this;
//   }
//   return this;
// }

// includes(value) {
//   let currntNode = this.head;
//   let boolean = false;
//   if(currntNode){ // if condition to prevent from error check if the linked list is empty
//   let currntValue = this.head.value;
//   while (currntNode) {
//     if (currntValue == value) { //check if we the target number existing
//       boolean = true;
//       currntNode = null;
//       return boolean;
//     }
//     currntNode = currntNode.next;
//     if (currntNode) { //check if we reached the last node
//       currntValue = currntNode.value;
//     }
//   }}
//   return boolean;
// }
