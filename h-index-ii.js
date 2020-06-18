// https://leetcode.com/problems/h-index-ii/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if (citations.length === 0) return 0
  let n = citations.length
  let i = n - 1
  let h = 0
  while (i >= 0) {
    if (n - i <= citations[i]) {
      h = n - i
    } else {
      break
    }
    i--
  }
  return h
};
