// https://leetcode.com/problems/number-of-lines-to-write-string/
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  const len = S.length
  if (len === 0) return [0, 0]
  let lines = 1
  let i = 0
  let inline = 0
  while (i < len) {
    const index = S.charCodeAt(i) - 96
    const w = widths[index-1]
    if (inline + w > 100) {
      lines++
      inline = 0
    }
    inline += w
    i++
  }
  return [lines, inline]
};
