"use strict";
const Node = require("./node");

class AnimalShelter {
  constructor() {
    this.front=null;
    this.ww=null
    this.length= 0;
  }
  enqueue(value) {
    
      let newNode=new Node(value)
    if(this.isEmpty()){
      this.front=newNode;
      this.ww=newNode;
    }
    else{
     
       this.ww.next = newNode;
       this.ww=newNode ;
      
    }
    this.length+=1
  }
  dequeue() {
    if(this.isEmpty()){return "this list is empty you cant dequeue"}
    this.front=this.front.next
    this.length-=1
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
module.exports = AnimalShelter;

