"use strict";

const LinkedList = require("../lib/linkedList");

describe("Linked list", () => {


  it("Can successfully instantiate an empty linked list", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it("Can properly insert into the linked list", () => {
    let list = new LinkedList();

    list.insert("One");

    expect(list.head.value).toEqual("One");

 
  });
  it("The head property will properly point to the first node in the linked list", () => {
    let list = new LinkedList();

    list.append("One");
    list.append("Two");

    expect(list.head.value).toEqual("One");
  });
  it("The head property will properly point to the first node in the linked list", () => {
    let list = new LinkedList();

    list.append("One");
    list.append("two");

    expect(list.head.value).toEqual("One");
    expect(list.head.next.value).toEqual("two");
  });

  it("Will return true when finding a value within the linked list that exists", () => {
    let list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.includes(1)).toEqual(true);
    expect(list.includes(2)).toEqual(true);
    expect(list.includes(3)).toEqual(true);
    expect(list.includes(4)).toEqual(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    let list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.includes(0)).toEqual(false);
    expect(list.includes(5)).toEqual(false);
    expect(list.includes(10)).toEqual(false);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    let list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.toString()).toEqual("{ 1 } -> { 2 } -> { 3 } -> { 4 } -> null");
   
  });
});
