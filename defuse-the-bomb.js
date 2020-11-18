// https://leetcode.com/problems/defuse-the-bomb/
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  const len = code.length
  return code.map((n, i) => {
    let _k = k
    let sum = 0
    let p = i
    while (_k !== 0) {
      if (k > 0) {
        p = p + 1 < len ? p + 1 : 0
        _k--
      } else {
        p = p - 1 >= 0 ? p - 1 : len - 1
        _k++
      }
      sum += code[p]
    }
    return sum
  })
};
