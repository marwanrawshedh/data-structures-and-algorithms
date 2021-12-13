const Node = require("../lib/node");
const BinaryTree = require("../lib/hashmapRepeatedWord");

describe("tree intersection", () => {
  test(" return a set of values found in both trees.", () => {
    let bt1 = new BinaryTree();
    let bt2 = new BinaryTree();
    bt1.root = new Node(
      1,
      new Node(2, new Node(3), new Node(4)),
      new Node(5, new Node(6), new Node(7))
    );
    bt2.root = new Node(
      1,
      new Node(5, new Node(3), new Node(11)),
      new Node(5, new Node(66), new Node(9))
    );

    expect(bt1.treeIntersection(bt1.root, bt2.root)).toEqual([1, 3, 5]);
  });
  //   test(" return a set of values found in both trees.", () => {
  //     let bt3 = new BinaryTree();
  //     let bt4 = new BinaryTree();
  //     bt3.root = new Node(
  //       10,
  //       new Node(5, new Node(4), new Node(11)),
  //       new Node(77, new Node(6), new Node(9))
  //     );
  //     bt4.root = new Node(
  //       1,
  //       new Node(5, new Node(3), new Node(11)),
  //       new Node(99, new Node(6), new Node(9))
  //     );

  //     expect(bt3.treeIntersection(bt3.root, bt4.root)).toEqual([5, 11, 6, 9]);
  //   });
  //   test(" return a set of values found in both trees.", () => {
  //     let bt5 = new BinaryTree();
  //     let bt6 = new BinaryTree();
  //     bt5.root = new Node(
  //       10,
  //       new Node(22, new Node(35), new Node(55)),
  //       new Node(8, new Node(66), new Node(77))
  //     );
  //     bt6.root = new Node(
  //       10,
  //       new Node(5, new Node(35), new Node(11)),
  //       new Node(5, new Node(66), new Node(99))
  //     );

  //     expect(bt5.treeIntersection(bt5.root, bt6.root)).toEqual([10, 35, 66]);
  //   });
});
