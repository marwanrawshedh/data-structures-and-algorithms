"use strict";
const BinaryTree = require("../lib/binaryTree");
const Node=require('../lib/node')
describe("BinaryTree", () => {
  
  it("(1,99,20,-11,770,100,330)", () => {
    const bt = new BinaryTree();
  bt.root = new Node(1, new Node(99, new Node(20), new Node(-11)), new Node(770, new Node(100), new Node(330)));
    
    expect(bt.maximumValue()).toBe(770);
  });
    it("(-1,-999,-220,-11,-770,-100,-330)", () => {
      const bt = new BinaryTree();
      bt.root =new Node(-1, new Node(-999, new Node(-220), new Node(-11)), new Node(-770, new Node(-100), new Node(-330)));
      expect(bt.maximumValue()).toBe(-1);
    });
    it("(1,44,55,1000,22,598,675)", () => {
      const bt = new BinaryTree();
      bt.root = new Node(1, new Node(44, new Node(55), new Node(1000)), new Node(22, new Node(598), new Node(675)));

      expect(bt.maximumValue()).toBe(1000);
    });
    
   
});
