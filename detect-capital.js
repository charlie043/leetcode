// https://leetcode.com/problems/detect-capital/
/**
 * @param {string} word
 * @return {boolean}
 */

const isUpperCase = (w) => {
  return w === w.toUpperCase()
}
const isLowerCase = (w) => {
  return w === w.toLowerCase()
}
const isAll = (check, digits) => {
  return digits.reduce((c, d) => {
    return c && check(d)
  }, true)
}
var detectCapitalUse = function(word) {
  if (!word) return true
  const [firstDigit, ...digits] = word.split('')
  if (isUpperCase(firstDigit)) {
    return isAll(isUpperCase, digits) || isAll(isLowerCase, digits)
  }
  return isAll(isLowerCase, digits)
};
