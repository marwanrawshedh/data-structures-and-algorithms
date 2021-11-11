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
  palindrome() {
    let m=[]
    let num=this.count
    let currentnode = this.head;
    let value = this.head;
    let res =true
    for(let i=0;value;i++){
      m[i]=value.value
value=value.next
   }
    while(currentnode) { 
      if (currentnode.value==m[num]){ 
      currentnode = currentnode.next;num-=1}
     else {return false }
    }
    return res;
  }
}
module.exports = LinkedList;

