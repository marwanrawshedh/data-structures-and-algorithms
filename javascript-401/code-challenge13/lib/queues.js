"use strict";
const Node = require("./node");

class AnimalShelter {
  constructor() {
    this.front=null;
    this.back=null
    this.length= 0;
  }
  enqueue(animal) {
    if(!(animal==="cat"||animal==="dog")){return null}
      let newNode=new Node(animal)
    if(this.isEmpty()){
      this.front=newNode;
      this.back=newNode; }
    else{
       this.back.next = newNode;
       this.back=newNode ;
      } this.length+=1}
  dequeue(pref) {
    if(!(pref==="cat"||pref==="dog")){return null}
    if(this.isEmpty()){return "this list is empty you cant dequeue"}
    let currentnode=this.front
    if(currentnode.value===pref){this.front=this.front.next;this.length-=1;
    return this}
    while(currentnode){
if(currentnode.value===pref){
currentnode=currentnode.next
  this.length-=1
  return }
currentnode=currentnode.next}}
  peek(){
    if(this.isEmpty()){return "nothing to show this list is empty "}
    else{
      return this.front.value
    }
  }
  isEmpty(){
    return this.front===null
  }
  validateBrackets(string){
    let arr = string.replace(/[^\[\]\(\)<>]+/g,"");//brackets only remove letters numbers
    if(arr.length % 2 !== 0) return false; // odd return false
       arr = arr.replace(/(\[\])|(\(\))|(<>)/g, "")
      if (arr.length === 2 ) { 
          if(arr[0]==="{"&&arr[1]==="}"){return true;}
          if(arr[0]==="("&&arr[1]===")"){return true;}
          if(arr[0]==="["&&arr[1]==="]"){return true;}
          ;  }     // Balanced and good. :)
      return false;  
  }
  
}
module.exports = AnimalShelter;

