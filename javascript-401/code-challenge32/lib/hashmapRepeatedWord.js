'use strict'
const Hashtable = require('./hashTable')
let myTable = new Hashtable(1000);
class BinaryTree {
  constructor() {
    this.root = null;
  }
  treeIntersection(node,node1) {
    let arr = [];
    let i=1
    function tree(node) {

      myTable.set(i ,node.value);
      
      i++
     
      if (node.left) {
     
        tree(node.left);
      }
      if (node.right) {
        tree(node.right);
      }
    }
    tree(node);
    i=1
    tree(node1);
    for (let y = 1; y < i; y++) {
      if(myTable.get(y).value[y]===myTable.get(y).next.value[y]){
        arr.push(myTable.get(y).value[y]);
        
      }
    }
    return arr;
  }}
  

  module.exports = BinaryTree
  