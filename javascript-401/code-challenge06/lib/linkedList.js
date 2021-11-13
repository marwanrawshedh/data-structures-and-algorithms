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
