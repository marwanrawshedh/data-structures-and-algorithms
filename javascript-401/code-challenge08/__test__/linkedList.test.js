"use strict";

const LinkedList = require("../lib/zipLinkedList.js");

describe("Zip-Linked list", () => {
  it("Zip the two linked lists together into one ", () => {
    let ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.append1(5);
    ll.append1(6);
    ll.zipLists(ll.head, ll.head1);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(5);
    expect(ll.head.next.next.value).toBe(2);
    expect(ll.head.next.next.next.value).toBe(6);
  });
  it("Zip the two linked lists together into one ", () => {
    let ll = new LinkedList();

    ll.append(1);
    
    ll.append1(5);
    ll.append1(6);
    ll.zipLists(ll.head, ll.head1);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(5);
    expect(ll.head.next.next.value).toBe(6);
    
  });
  it("Zip the two linked lists together into one ", () => {
    let ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append1(6);
    ll.zipLists(ll.head, ll.head1);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(6);
    expect(ll.head.next.next.value).toBe(2);
    expect(ll.head.next.next.next.value).toBe(3);
  });
  it("Zip the two linked lists together into one bun one of it empty ", () => {
    let ll = new LinkedList();

    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.zipLists(ll.head, ll.head1);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(2);
    expect(ll.head.next.next.value).toBe(3);
    
  });
});
