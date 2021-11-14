"use strict";

const pseudoQueue = require("../lib/pseudoQueue");

describe("queues tests", () => {
  it("1-Can successfully enqueue into empty a pseudoQueue", () => {
    const qq = new pseudoQueue();
    qq.enqueue(1);
    expect(qq.length).toBe(1);
    expect(qq.front.value).toBe(1)
  });
  it("2-Can successfully enqueue multiple values into a pseudoQueue by push", () => {
    const qq = new pseudoQueue();
    qq.push(1);
    qq.push(2);
    qq.push(3);

    expect(qq.length).toBe(3);
  });
  it("3-Can successfully push multiple values into a pseudoQueue by push after that enqueue node ", () => {
    const qq = new pseudoQueue();
    qq.push(1);
    qq.push(2);
    qq.push(3);
    qq.enqueue(20);
    expect(qq.length).toBe(4);
    expect(qq.front.value).toBe(20);
  });
  it("4-Can successfully dequeue out of a pseudoQueue the expected value", () => {
    const qq = new pseudoQueue();
    qq.push(1);
    qq.push(2);
    qq.push(3);
    qq.dequeue();
    expect(qq.dequeue()).toBe(1)
    expect(qq.front.value).toBe(3);
  });

  
 
  it("5-Can successfully instantiate an empty pseudoQueue", () => {
    const qq = new pseudoQueue();

    expect(qq.length).toBe(0);
    expect(qq.front).toBe(null);
  });
  it("6-Calling dequeue or peek on empty queue raises exception", () => {
    const qq = new pseudoQueue();

    expect(qq.peek()).toBe("nothing to show this list is empty ");
    expect(qq.dequeue()).toBe("this list is empty you cant dequeue");
  });
});
