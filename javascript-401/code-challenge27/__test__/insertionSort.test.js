"use strict";
const mergesort= require("../insertionSort");
describe("insertionSort2", () => {
  it("should return sorted array", () => {
    expect(Array.isArray(mergesort([12,5,99,77,56,3,13,5,6,14,89]))).toBe(true);
    expect(mergesort([12,5,99,77,56,3,13,5,6,14,89])).toEqual([3,5,5,6,12,13,14,56,77,89,99]);
  });
});

