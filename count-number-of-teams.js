// https://leetcode.com/problems/count-number-of-teams/
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let count = 0
  for (let i0 = 0; i0 < rating.length - 2; i0++) {
    const n0 = rating[i0]
    for (let i1 = i0 + 1; i1 < rating.length - 1; i1++) {
      const n1 = rating[i1]
      if (n0 > n1) {
        for (let i2 = i1+1; i2 < rating.length; i2++) {
          const n2 = rating[i2]
          if (n1 > n2) {
            count++
          }
        }
      }
    }
  }
  for (let i0 = 0; i0 < rating.length - 2; i0++) {
    const n0 = rating[i0]
    for (let i1 = i0 + 1; i1 < rating.length - 1; i1++) {
      const n1 = rating[i1]
      if (n0 < n1) {
        for (let i2 = i1+1; i2 < rating.length; i2++) {
          const n2 = rating[i2]
          if (n1 < n2) {
            count++
          }
        }
      }
    }
  }
  return count
};
