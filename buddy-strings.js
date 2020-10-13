// https://leetcode.com/problems/buddy-strings/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false
  const countA = {}
  const countB = {}
  let diff = 0
  for (let i = 0; i < A.length; i++) {
    const a = A[i]
    const b = B[i]
    countA[a] = (countA[a] || 0) + 1
    countB[b] = (countB[b] || 0) + 1
    if (a !== b) diff++ 
    
  }
  let hasSameCharactor = false
  for (let key of Object.keys(countA)) {
    if (countA[key] !== countB[key]) {
      return false
    }
    if (countA[key] > 1) {
      hasSameCharactor = true
    }
  }
  return (diff === 0 && hasSameCharactor) || diff === 2
};
