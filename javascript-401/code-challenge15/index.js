"use strict";
const Node = require("./lib/node");
const BinaryTree= require("./lib/binaryTree");
const BinarySearchTree= require("./lib/binarySearchTree");
const bt = new BinaryTree();
const bst=new BinarySearchTree();
bt.root = new Node("A", new Node("B", new Node("D"), new Node("E")), new Node("C", new Node("F"), new Node("G")));

console.log(bt.preOrder())
console.log(bt.inOrder())
console.log(bt.postOrder())
bst.add(30)
bst.add(20)
bst.add(40)
bst.add(55)
bst.add(14)
bst.add(10)
bst.add(19)
bst.add(46)
bst.add(53)
bst.add(44)
bst.add(6)
bst.add(1)
bst.add(53)
bst.add(13)
bst.add(48)
console.log(bst.contain(5))
