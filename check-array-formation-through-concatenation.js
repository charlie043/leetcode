// https://leetcode.com/problems/check-array-formation-through-concatenation/
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  pieces.sort((a, b) => b.length - a.length)
  for (let p = 0; p < pieces.length; p++) {
    const piece = pieces[p]
    const n0 = piece[0]
    const index = arr.indexOf(n0)
    let match = true
    for (let i = 0; i < piece.length; i++) {
      if (piece[i] !== arr[index + i]) {
        match = false
        break
      }
    }
    if (match) {
      arr.splice(index, piece.length)
    } else {
      return false   
    }
  }
  return true
};
