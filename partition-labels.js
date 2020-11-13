// https://leetcode.com/problems/partition-labels/
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const ret = []
  const _S = S.split('')
  while (_S.length) {
    let splitIndex = 0
    const s = _S[0]
    splitIndex = _S.lastIndexOf(s)
    let i = 0
    while (i < splitIndex) {
      const _s = _S[i]
      const index = _S.lastIndexOf(_s)
      if (index > splitIndex) {
        splitIndex = index
      }
      i++
    }
    ret.push(splitIndex+1)
    _S.splice(0, splitIndex+1)
  }
  return ret
};
