// https://leetcode.com/problems/most-common-word/
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.replace(/[!?',;.]/g, ' ').toLowerCase().split(' ')
  const count = {}
  words.forEach(w => {
    if (w) {
      count[w] = (count[w] || 0) + 1
    }
  })
  let max = 0
  let ret
  for (const key of Object.keys(count)) {
    if (count[key] > max && !banned.includes(key)) {
      ret = key
      max = count[key]
    }
  }
  return ret
};
