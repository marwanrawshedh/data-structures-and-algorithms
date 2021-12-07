"use strict";
const quickSor= require("../insertionSort");
describe("insertionSort3", () => {
  it("should return sorted array", () => {
    expect(Array.isArray(quickSor([12,5,99,77,56,3,13,5,6,14,89],0,10))).toBe(true);
    expect(quickSor([12,5,99,77,56,3,13,5,6,14,89],0,10)).toEqual([3,5,5,6,12,13,14,56,77,89,99]);
  });
});

