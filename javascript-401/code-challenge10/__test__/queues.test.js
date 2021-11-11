"use strict";

const queues = require("../lib/queues");

describe("queues tests", () => {
  it("1-Can successfully enqueue into a queue", () => {
    const qq = new queues();
    qq.enqueue(1);
    expect(qq.length).toBe(1);
  });
  it("2-Can successfully enqueue multiple values into a queue", () => {
    const qq = new queues();
   qq.enqueue(1);
 qq.enqueue(2);
 qq.enqueue(3);
 qq.enqueue(4);
    expect(qq.length).toBe(4);
  });
  it("3-Can successfully dequeue out of a queue the expected value", () => {
    const qq = new queues();
    qq.enqueue(1);
    qq.enqueue(2);
    qq.enqueue(3);
    qq.enqueue(4);
    qq.dequeue();

    expect(qq.front.value).toBe(2);
  });
 
  it("4-Can successfully peek into a queue, seeing the expected value", () => {
    const qq = new queues();
    qq.enqueue(1);
    qq.enqueue(2);
    qq.enqueue(3);
    qq.enqueue(4);
    expect(qq.peek()).toBe(1);
  });
  it("5-Can successfully empty a queue after multiple dequeues", () => {
    const qq = new queues();
    qq.enqueue(1);
    qq.enqueue(2);
    qq.enqueue(3);
    qq.enqueue(4);
    qq.dequeue();
    qq.dequeue();
    qq.dequeue();
    qq.dequeue();
    expect(qq.isEmpty()).toBe(true);
  });
  it("Can successfully instantiate an empty queue", () => {
    const qq = new queues();

    expect(qq.length).toBe(0);
    expect(qq.front).toBe(null);
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    const qq = new queues();

    expect(qq.peek()).toBe("nothing to show this list is empty ");
    expect(qq.dequeue()).toBe("this list is empty you cant dequeue");
  });
});





