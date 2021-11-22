"use strict";
const BinaryTree = require("../lib/binaryTree");
const Node = require("../lib/node");
describe("BinaryTree", () => {
  it("tree number one having 7 node", () => {
    const bt = new BinaryTree();
    bt.root = new Node(
      1,
      new Node(2, new Node(3), new Node(4)),
      new Node(5, new Node(6), new Node(7))
    );

    expect(bt.breadthFirst(bt.root)).toEqual([1, 2, 5, 3, 4, 6, 7]);
  });
  it("tree number tow having 10 node", () => {
    const bt = new BinaryTree();
    bt.root = new Node(
      1,
      new Node(2, new Node(3, new Node(9)), new Node(4)),
      new Node(5, new Node(6, new Node(15), new Node(16)), new Node(7))
    );
    expect(bt.breadthFirst(bt.root)).toEqual([1, 2, 5, 3, 4, 6, 7, 9, 15, 16]);
  });
  it("tree number three having 13 node", () => {
    const bt = new BinaryTree();
    bt.root = new Node(
      1,
      new Node(2, new Node(3, new Node(9)), new Node(4)),
      new Node(
        5,
        new Node(6, new Node(15), new Node(16)),
        new Node(7, new Node(10, new Node(11), new Node(12)))
      )
    );

    expect(bt.breadthFirst(bt.root)).toEqual([
      1, 2, 5, 3, 4, 6, 7, 9, 15, 16, 10, 11, 12,
    ]);
  });
});
