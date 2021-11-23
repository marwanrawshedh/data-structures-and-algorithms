"use strict";
const Node=require('./node')
class BinaryTree {
  constructor() {
    this.root = null;
    this.front = null;
    this.ww = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.ww = newNode;
    } else {
      this.ww.next = newNode;
      this.ww = newNode;
    }
    this.length += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      return "this list is empty you cant dequeue";
    }
    this.front = this.front.next;
    this.length -= 1;
  }
  isEmpty() {
    return this.front === null;
  }
 
  treeFizzBuzz(tree) {
    this.enqueue(tree)
while(this.front){
  if(this.front.value.value%3==0&&this.front.value.value%5==0){this.front.value.value="FizzBuzz"}
  else if(this.front.value.value%3==0){this.front.value.value="Fizz"}
  else if(this.front.value.value%5==0){this.front.value.value="Buzz"}
  else{this.front.value.value=`${this.front.value.value}`}
  if(this.front.value.children){
    for(let i=0;i<this.front.value.children.length;i++){
      this.enqueue(this.front.value.children[i])}}
  this.dequeue()}
  return this.root}
}

module.exports = BinaryTree;
