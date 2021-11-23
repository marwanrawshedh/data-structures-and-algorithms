"use strict";
const BinaryTree = require("../lib/binaryTree");
const Node = require("../lib/kNode");
describe("K-ary-tree", () => {
 
  it("one node", () => {
    const bt = new BinaryTree();
    bt.root = new Node(1);
    
    bt.treeFizzBuzz(bt.root)
    expect(bt.root.value).toBe("1");
   
  });

  it("4 nodes", () => {
    const bt = new BinaryTree();
    bt.root = new Node(1, [
      new Node(2),
      new Node(3),
      new Node(4,)
    ]);
    
    bt.treeFizzBuzz(bt.root)
    expect(bt.root.value).toBe("1");
    expect(bt.root.children[0].value).toBe("2");
    expect(bt.root.children[1].value).toBe("Fizz");
    expect(bt.root.children[2].value).toBe("4");
    
   
  });
  it("10 nodes", () => {
    const bt = new BinaryTree();
    bt.root = new Node(1, [
      new Node(2, [new Node(5), new Node(6)]),
      new Node(3, [new Node(8)]),
      new Node(4, [new Node(11), new Node(15), new Node(30)])
    ]);
    
    bt.treeFizzBuzz(bt.root)
    expect(bt.root.value).toBe("1");
    expect(bt.root.children[0].value).toBe("2");
    expect(bt.root.children[1].value).toBe("Fizz");
    expect(bt.root.children[2].value).toBe("4");
    
    expect(bt.root.children[0].children[0].value).toBe("Buzz");
    expect(bt.root.children[0].children[1].value).toBe("Fizz");
    

    expect(bt.root.children[1].children[0].value).toBe("8");

    expect(bt.root.children[2].children[0].value).toBe("11");
    expect(bt.root.children[2].children[1].value).toBe("FizzBuzz");
    expect(bt.root.children[2].children[2].value).toBe("FizzBuzz");
    
   
  });
   
});
