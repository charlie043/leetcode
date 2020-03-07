// https://leetcode.com/problems/sort-array-by-parity-ii/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const l = A.length
  const e = A.filter((v) => v % 2 === 0)
  const o = A.filter((v) => v % 2 !== 0)
  const ret = []
  for (let i = 0 ; i < l; i++) {
    ret.push(i % 2 === 0 ? e.pop() : o.pop())
  }
  return ret
};
