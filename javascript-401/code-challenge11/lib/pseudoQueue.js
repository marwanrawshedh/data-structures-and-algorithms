"use strict";
const Node = require("./node");

class pseudoQueue {
  constructor() {
    this.front=null;
    this.ww=null
    this.length= 0;
  }
  push(value){
    if(this.isEmpty()){
      let newNode=new Node(value)
      
      this.front=newNode
    }
    else{
      let newNode=new Node(value)
       newNode.next = this.front;
       this.front = newNode;
      
    }
    this.length+=1
  }
  pop(){
    if(this.isEmpty()){return "this list is empty you cant pop"}
    this.front=this.front.next
    this.length-=1
  }
  peek(){
    if(this.isEmpty()){return "nothing to show this list is empty "}
    else{
      return this.front.value
    }
  }
  enqueue(value) {
    
      let newNode=new Node(value)
    if(this.isEmpty()){
      this.front=newNode;
      this.ww=newNode;
    }
    else{
     let first=this.front
       this.front = newNode;
       this.front.next=first ;
      
    }
    this.length+=1
  }
  dequeue() {
    if(this.isEmpty()){return "this list is empty you cant dequeue"}
    let currentnode=this.front
    while(currentnode){
if(currentnode.next===null){
let value=currentnode.value
  currentnode=null
  this.length-=1
  return value
}
currentnode=currentnode.next

    }
  }
  peek(){
    if(this.isEmpty()){return "nothing to show this list is empty "}
    else{
      return this.front.value
    }
  }
  isEmpty(){
    return this.front===null
  }

}
module.exports = pseudoQueue;

