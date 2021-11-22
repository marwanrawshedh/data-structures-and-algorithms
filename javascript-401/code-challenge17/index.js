"use strict";
const Node = require("./lib/node");
const BinaryTree= require("./lib/binaryTree");
const bt = new BinaryTree();
bt.root =new Node(1, new Node(2, new Node(3,new Node(9)), new Node(4)), new Node(5, new Node(6,new Node(15),new Node(16)), new Node(7)))

console.log(bt.breadthFirst(bt.root))



