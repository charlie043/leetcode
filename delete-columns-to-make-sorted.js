// https://leetcode.com/problems/delete-columns-to-make-sorted/
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const n = A.length
  const a = A.map((word) => word.split(''))
  let count = 0
  let i = 0
  while (i < a[0].length) {
    let remove = false
    for (let j = 0; j < n - 1; j++) {
      if (a[j][i] > a[j+1][i]) {
        remove = true
        break
      }
    }
    if (remove) {
      for (let j = 0; j < n; j++) {
        a[j].splice(i, 1)
      }
      count++
    } else {
      i++
    }
    remove = false
  }
  return count
};
