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
    }}
  zipLists(head, head1) {
    let m;
    let l
    let currentNode = head;
    let currentNode1 = head1;
    while (!(currentNode === null && currentNode1 === null)) {
      if(currentNode===null&&!(currentNode1===null)){head=head1
      return head}
      if(!(currentNode===null||currentNode1===null)){
      l=currentNode.next
      m=currentNode1.next
      currentNode.next=currentNode1
      currentNode1=m
      currentNode.next.next=l 
      if( (currentNode.next.next===null&&!(currentNode1===null))){
        currentNode.next.next=currentNode1
        return this}
      currentNode=currentNode.next.next}
      if(currentNode1===null){return this}}}
}
module.exports = LinkedList;
