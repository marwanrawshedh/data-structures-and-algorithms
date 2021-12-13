'use strict';
const Node=require('./lib/node');
const BinaryTree=require('./lib/hashmapRepeatedWord');

const bt1 = new BinaryTree();
const bt2 = new BinaryTree();
bt1.root = new Node(1, new Node(2, new Node(3), new Node(4)), new Node(5, new Node(6), new Node(7)));
bt2.root = new Node(1, new Node(5, new Node(3), new Node(11)), new Node(5, new Node(66), new Node(9)));
console.log(bt1.treeIntersection(bt1.root,bt2.root));