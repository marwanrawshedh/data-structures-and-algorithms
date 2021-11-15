"use strict";

const queues = require("../lib/queues");

describe("queues tests", () => {
  it("1-either a dog or a cat, based on preference.to enqueue", () => {
    const qq = new queues();
    qq.enqueue(1);
    expect(qq.length).toBe(0);
    expect(qq.front).toBe(null);
  });
  it("2-Can successfully enqueue multiple values into a queue", () => {
    const qq = new queues();
   qq.enqueue("cat");
 qq.enqueue("dog");
 expect(qq.front.value).toBe("cat");
 expect(qq.front.next.value).toBe("dog");
    expect(qq.length).toBe(2);
  });
  it("3-Can successfully dequeue out of a queue the expected value", () => {
    const qq = new queues();
    qq.enqueue("cat");
 qq.enqueue("dog");
    
    qq.dequeue("cat");
    expect(qq.length).toBe(1);
    expect(qq.front.value).toBe("dog");
  });
  
  it("4-If pref is not dog or cat then return null.", () => {
    const qq = new queues();
    qq.enqueue("cat");
 qq.enqueue("dog");
    
    qq.dequeue();
    expect(qq.dequeue()).toBe(null);
    expect(qq.length).toBe(2);
    expect(qq.front.value).toBe("cat");
    expect(qq.front.next.value).toBe("dog");
  });
  
});





