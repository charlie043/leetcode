// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const set = new Set()
  for (let n of A) {
    if (set.has(n)) return n
    set.add(n)
  }
};
