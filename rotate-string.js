// https://leetcode.com/problems/rotate-string/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) return false
  if (A.length === 0) return true
  const b = B.split('')
  const base = A[0]
  for (let i = 0; i < b.length; i++) {
    if (base === b[i]) {
      const rotate = [...b.slice(i, b.length), ...b.slice(0, i)]
      if (A === rotate.join('')) {
        return true
      }
    }
  }
  return false
};
