"use strict";

const LinkedList = require("../lib/linkedList");

describe("Linked list", () => {

  it("Where k is greater than the length of the linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      expect(list.kthFromEnd(4)).toBe("Exception");
    });
    it("Where k and the length of the list are the same", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      expect(list.kthFromEnd(0)).toBe(3);
    });
    
    
    it("Where k is not a positive integer", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      expect(list.kthFromEnd(-1)).toBe("Exception");
    });
    
    it("Where the linked list is of a size 1", () => {
      let list = new LinkedList();

      list.append(1)
      
      expect(list.kthFromEnd(0)).toBe(1);
    });
    it("Where the linked list is of a size 1", () => {
      let list = new LinkedList();

      list.append(1)
      
      expect(list.kthFromEnd(0)).toBe(1);
      expect(list.kthFromEnd(1)).toBe("Exception");
    });
    it("“Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      list.append(4)
      list.append(5)
      expect(list.kthFromEnd(2)).toBe(3);
      
    });

});
