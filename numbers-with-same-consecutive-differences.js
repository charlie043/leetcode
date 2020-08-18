// https://leetcode.com/problems/numbers-with-same-consecutive-differences/
/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  const ret = N === 1 ? [0] : []
  const p = (ary) => {
    const len = ary.length
    if (len === N) {
      ret.push(ary.join(''))
      return
    }
    const last = len-1
    if (K === 0) {
      p([...ary, ary[last]])
    } else {
      if (ary[last]-K >= 0) {
        p([...ary, ary[last]-K])
      }
      if (ary[last]+K <= 9) {
        p([...ary, ary[last]+K])
      }
    }
  }
  let i = 9
  while (i) {
    p([i])
    i--
  }
  return ret
};
