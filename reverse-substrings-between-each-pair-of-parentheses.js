// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
const reverse = (text) => {
  const to = text.indexOf(')')
  if (to < 0) return text
  let from = to
  while (from) {
    if (text[from] === '(') break
    from--
  }
  const left = text.slice(0, from)
  const right = text.slice(to+1, text.length)
  const inner = text.slice(from+1, to)
  return reverse(left + inner.split('').reverse().join('') + right)
}
var reverseParentheses = function(s) {
  return reverse(s)
};
