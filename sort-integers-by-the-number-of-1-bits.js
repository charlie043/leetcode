// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const countDigit = (num, memo) => {
  const count = num.toString(2).split('').reduce((c, d) => {
   return c + parseInt(d)
  }, 0)
  memo[num] = count
  return count
}
var sortByBits = function(arr) {
  const memo = {}
  return arr.sort((a, b) => {
    const _a = memo[a] || countDigit(a, memo)
    const _b = memo[b] || countDigit(b, memo)
    if (_a === _b) {
      return a - b
    }
    return _a - _b
  })
};
