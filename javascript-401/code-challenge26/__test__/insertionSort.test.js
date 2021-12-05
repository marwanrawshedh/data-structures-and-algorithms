"use strict";
const {insertionSort} = require("../insertionSort");
const {reverseSorted}=require("../insertionSort");
const {fewUniques}=require("../insertionSort");
describe("insertionSort", () => {
  it("should return Nearly-sorted array", () => {
    expect(Array.isArray(insertionSort([12,5,99,77,56,3,13,5,6,14,89]))).toBe(true);
    expect(insertionSort([12,5,99,77,56,3,13,5,6,14,89])).toEqual([3,5,5,6,12,13,14,56,77,89,99]);
  });
});
// it("should return Reverse-sorted array", () => {
//   expect(Array.isArray(reverseSorted([12,5,99,77,56,3,13,5,6,14,89]))).toBe(true);
//   expect(reverseSorted([12,5,99,77,56,3,13,5,6,14,89])).toEqual([99,89,77,56,14,13,12,6,5,5,3]);
// });
// it("should return Few-uniques array", () => {
//   expect(Array.isArray(fewUniques([12,5,99,77,56,3,13,5,6,14,89]))).toBe(true);
//   expect(fewUniques([12,5,99,77,56,3,13,89,77,5,6,14,89])).toEqual([3,5,6,12,13,14,56,77,89,99]);
// });
