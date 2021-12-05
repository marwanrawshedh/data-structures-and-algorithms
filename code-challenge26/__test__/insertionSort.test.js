"use strict";
const insertionSort = require("../insertionSort");

describe("insertionSort", () => {
  it("should return an array", () => {
    expect(Array.isArray(insertionSort([1, 2, 3, 4, 5]))).toBe(true);
    expect(insertionSort([12,5,99,77,56,3,13,5,6,14,89])).toEquals([3,5,5,6,12,13,14,77,89,99]);
  });
});
