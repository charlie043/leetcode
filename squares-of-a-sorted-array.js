// https://leetcode.com/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(a => a*a).sort((a,b) => a-b)
};
