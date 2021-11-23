"use strict";
const Node = require("./lib/kNode");
const BinaryTree = require("./lib/binaryTree");
const bt = new BinaryTree();
bt.root = new Node(1, [
  new Node(2, [new Node(5), new Node(6), new Node(7)]),
  new Node(3, [new Node(8), new Node(9)]),
  new Node(4, [new Node(11), new Node(15), new Node(30)])
]);

console.log(bt.root);
console.log(bt.treeFizzBuzz(bt.root));
