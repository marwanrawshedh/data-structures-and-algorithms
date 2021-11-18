"use strict";
const Node = require("./node");
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    let newnode = new Node(value);
    if (!this.root) {
      this.root = newnode;
    } else {
      function tree(node) {
        if (node.value > newnode.value) {
          if (node.left == null) {
            node.left = newnode;
          } else if (node.right == null && newnode.value < node.left.value) {
            node.right = node.left;
            node.left = newnode;
          } else if (node.right == null && newnode.value > node.left.value) {
            node.right = newnode;
          } else {
            if (newnode.value < node.value) {
              tree(node.left);
            } else {
              tree(node.right);
            }
          }
        } else if (node.value < newnode.value) {
          if (node.left == null) {
            node.left = newnode;
          } else if (node.right == null && newnode.value < node.left.value) {
            node.right = node.left;
            node.left = newnode;
          } else if (node.right == null && newnode.value > node.left.value) {
            node.right = newnode;
          } else {
            if (newnode.value < node.value) {
              tree(node.left);
            } else {
              tree(node.right);
            }
          }
        }
      }
      tree(this.root);
    }
  }
  contain(value) {
    let res =false
    function tree(node) {
      if (node.value === value) {
       res=true
      }
      if (node.left) {
        tree(node.left);
      }
      if (node.right) {
        tree(node.right);
      }
    }
    tree(this.root);
    return res;
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

  
 
}
module.exports = BinarySearchTree ;
