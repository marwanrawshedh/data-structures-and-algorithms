"use strict";
class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let arr = [];
    function tree(node) {
      arr.push(node.value);
      if (node.left) {
        tree(node.left);
      }
      if (node.right) {
        tree(node.right);
      }
    }
    tree(this.root);
    return arr;
  }
  inOrder() {
    let arr = [];
    function tree(node) {
      if (node.left) {
        tree(node.left);
      }
      arr.push(node.value);
      if (node.right) {
        tree(node.right);
      }
    }
    tree(this.root);
    return arr;
  }
  postOrder() {
    let arr = [];
    function tree(node) {
      if (node.left) {
        tree(node.left);
      }
      if (node.right) {
        tree(node.right);
      }
      arr.push(node.value);
    }
    tree(this.root);
    return arr;
  }

  isEmpty() {
    return this.root === null;
  }
  maximumValue() {
    if(this.root==null){return "empty tree"}
    let max = this.root.value;
    function tree(node) {
      if(node.value>max){max=node.value}
      if (node.left) {
        tree(node.left);
      }
      if (node.right) {
        tree(node.right);
      }
    }
    tree(this.root);
    return max;
  }
}

module.exports =  BinaryTree;
