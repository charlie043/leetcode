// https://leetcode.com/problems/sort-array-by-parity/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return A.sort((a, b) => a % 2 === 1 ? 1 : -1 )  
};
