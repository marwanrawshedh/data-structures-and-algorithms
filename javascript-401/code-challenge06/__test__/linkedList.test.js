"use strict";

const LinkedList = require("../lib/linkedList");

describe("Linked list", () => {

  it("Can successfully add a node to the end of the linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      expect(list.head.next.next.value).toBe(3);
    });
    it("Can successfully add multiple nodes to the end of a linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
    
    it(" Can successfully insert a node before a node located i the middle of a linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      list.append(4)
      list.insertBefore(4,22)
      expect(list.toString()).toBe("{ 1 } -> { 2 } -> { 3 } -> { 22 } -> { 4 } -> null");
    });
    it(" Can successfully insert a node before the first node of a linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      list.append(4)
      list.insertBefore(1,22)
      expect(list.toString()).toBe("{ 22 } -> { 1 } -> { 2 } -> { 3 } -> { 4 } -> null");
    });
    it(" Can successfully insert after a node in the middle of the linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      list.append(4)
      list.insertAfter(2,22)
      expect(list.toString()).toBe("{ 1 } -> { 2 } -> { 22 } -> { 3 } -> { 4 } -> null");
    });
    
    it(" Can successfully insert a node after the last node of the linked list", () => {
      let list = new LinkedList();

      list.append(1)
      list.append(2)
      list.append(3)
      list.append(4)
      list.insertAfter(4,22)
      expect(list.toString()).toBe("{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 22 } -> null");
    });
   
});
