// https://leetcode.com/problems/di-string-match/
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const ret = []
  let si = 0
  let ei = S.length
  for (const s of S) {
    if (s === 'I') {
      ret.push(si)
      si++
    } else {
      ret.push(ei)
      ei--
    }
  }
  ret.push(si)
  return ret
};
