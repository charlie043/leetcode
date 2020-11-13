// https://leetcode.com/problems/keyboard-row/
/**
 * @param {string[]} words
 * @return {string[]}
 */
const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

const check = (row, word) => {
  const w = word.split('')
  for (const d of w) {
    if (!row.includes(d.toLowerCase())) {
      return false
    }
  }
  return true
}

var findWords = function(words) {
  const ret = []
  words.forEach((word) => {
    if (check(row3, word) || check(row2, word) || check(row1, word)) {
      ret.push(word)
    }
  })
  return ret
};
