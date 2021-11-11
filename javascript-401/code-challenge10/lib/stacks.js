"use strict";
const Node = require("./node");

class stacks {
  constructor() {
  
    this.top=null

    this.length= 0;
  }
  push(value){
    
    if(this.isEmpty()){
      let newNode=new Node(value)
      
      this.top=newNode
    }
    else{
      let newNode=new Node(value)
       newNode.next = this.top;
       this.top = newNode;
      
    }
    this.length+=1
  }
  pop(){
    if(this.isEmpty()){return "this list is empty you cant pop"}
    this.top=this.top.next
    this.length-=1
  }
  peek(){
    if(this.isEmpty()){return "nothing to show this list is empty "}
    else{
      return this.top.value
    }
  }
  isEmpty(){
    return this.top===null
  }

}
module.exports = stacks;

