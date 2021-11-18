"use strict";
const BinarySearchTree = require("../lib/binarySearchTree");
// const bst=new BinarySearchTree();

describe("Can successfully instantiate an empty tree", () => {
  it("1", () => {
    const bst = new BinarySearchTree();

    expect(bst.root).toBe(null);
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    const bst = new BinarySearchTree();

    bst.add(30);

    expect(bst.root.value).toBe(30);
  });
  it("Can successfully add a left child and right child to a single root node", () => {
    const bst = new BinarySearchTree();
    bst.add(30);
    bst.add(40);
    bst.add(20);
    

    expect(bst.root.value).toBe(30);
    expect(bst.root.right.value).toBe(40);
    expect(bst.root.left.value).toBe(20);
  });

    it("Can successfully return a collection from a preorder traversal", () => {
      const bst = new BinarySearchTree();
      bst.add(30);
      bst.add(40);
      bst.add(20);

      expect(bst.preOrder()).toEqual(expect.arrayContaining([30,20,40]));
    });
    it("Can successfully return a collection from an inorder traversal", () => {
      const bst = new BinarySearchTree();
      bst.add(30);
      bst.add(40);
      bst.add(20);

      expect(bst.inOrder()).toEqual(expect.arrayContaining([20,40,30]));
    });
    it("Can successfully return a collection from a postorder traversal", () => {
      const bst = new BinarySearchTree();
      bst.add(30);
      bst.add(40);
      bst.add(20);
      bst.add(44);
      bst.add(3);
      bst.add(25);

      expect(bst.preOrder()).toEqual(expect.arrayContaining([3,20,25,44,40,30]));
    });
});

