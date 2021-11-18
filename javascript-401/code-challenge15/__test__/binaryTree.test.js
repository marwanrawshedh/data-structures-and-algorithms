"use strict";
const BinaryTree = require("../lib/binaryTree");
const Node=require('../lib/node')
describe("BinaryTree", () => {
  it("Can successfully instantiate an empty tree", () => {


    const bt = new BinaryTree();

    expect(bt.root).toBe(null);
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    const bt = new BinaryTree();
bt.root = new Node(1);
   

    expect(bt.root.value).toBe(1);
  });
  it("Can successfully add a left child and right child to a single root node", () => {
    const bt = new BinaryTree();
  bt.root = new Node(1, new Node(2),new Node(3));
    

    expect(bt.root.value).toBe(1);
    expect(bt.root.left.value).toBe(2);
    expect(bt.root.right.value).toBe(3);
  });

    it("Can successfully return a collection from a preorder traversal", () => {
      const bt = new BinaryTree();
      bt.root = new Node("A", new Node("B", new Node("D"), new Node("E")), new Node("C", new Node("F"), new Node("G")));

      

      expect(bt.preOrder()).toEqual(expect.arrayContaining([
        'A', 'B', 'D',
        'E', 'C', 'F',
        'G'
      ]));
    });
    it("Can successfully return a collection from an inorder traversal", () => {
      const bt = new BinaryTree();
      bt.root = new Node("A", new Node("B", new Node("D"), new Node("E")), new Node("C", new Node("F"), new Node("G")));

    

      expect(bt.inOrder()).toEqual(expect.arrayContaining([
        'D', 'B', 'E',
        'A', 'F', 'C',
        'G'
      ]));
    });
    it("Can successfully return a collection from a postorder traversal", () => {
      const bt = new BinaryTree();
   
      bt.root = new Node("A", new Node("B", new Node("D"), new Node("E")), new Node("C", new Node("F"), new Node("G")));


      expect(bt.preOrder()).toEqual(expect.arrayContaining([
        'D', 'E', 'B',
        'F', 'G', 'C',
        'A'
      ]));
    });
});
