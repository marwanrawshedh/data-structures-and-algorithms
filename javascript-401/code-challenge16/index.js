"use strict";
const Node = require("./lib/node");
const BinaryTree= require("./lib/binaryTree");
const bt = new BinaryTree();
bt.root =      bt.root =new Node(-1, new Node(-999, new Node(-220), new Node(-11)), new Node(-770, new Node(-100), new Node(-330)));
console.log(bt.preOrder())
// console.log(bt.())
// console.log(bt.maximumValue())


