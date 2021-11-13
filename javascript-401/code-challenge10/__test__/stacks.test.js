"use strict";
const stacks = require("../lib/stacks");
describe("stack tests", () => {
  it("1-Can successfully push onto a stack", () => {
    const ss = new stacks();
    ss.push(1);
    expect(ss.length).toBe(1);
  });
  it("2-Can successfully push multiple values onto a stack", () => {
    const ss = new stacks();
    ss.push(1);
    ss.push(2);
    ss.push(3);
    ss.push(4);
    expect(ss.length).toBe(4);
  });
  it("3-Can successfully pop off the stack", () => {
    const ss = new stacks();
    ss.push(1);
    ss.push(2);
    ss.push(3);
    ss.push(4);
    ss.pop();
    expect(ss.length).toBe(3);
  });
  it("4-Can successfully empty a stack after multiple pops", () => {
    const ss = new stacks();
    ss.push(1);
    ss.push(2);
    ss.push(3);
    ss.push(4);
    ss.pop();
    ss.pop();
    ss.pop();
    ss.pop();
    expect(ss.isEmpty()).toBe(true);
  });

  it("5-Can successfully peek the next item on the stack", () => {
    const ss = new stacks();
    ss.push(1);
    ss.push(2);
    ss.push(3);
    ss.push(4);
   
    expect(ss.peek()).toBe(4);
  });
  it("6-Can successfully instantiate an empty stack", () => {
    const ss = new stacks();

    expect(ss.length).toBe(0);
    expect(ss.top).toBe(null);
  });
  it("7-Can successfully instantiate an empty stack", () => {
    const ss = new stacks();

    expect(ss.peek()).toBe("nothing to show this list is empty ");
    expect(ss.pop()).toBe("this list is empty you cant pop");
  });
});
