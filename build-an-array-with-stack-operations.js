// https://leetcode.com/problems/build-an-array-with-stack-operations/
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  if (n === 0) return []
  const num = target[target.length-1] < n ? target[target.length-1] : n
  const ret = []
  let i = 0
  let index = 0
  while (i < num) {
    if (target[index] === i+1) {
      ret.push('Push')
      index++
    } else {
      ret.push('Push')
      ret.push('Pop')
    }
    i++
  }
  return ret
};
