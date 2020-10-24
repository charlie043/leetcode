// https://leetcode.com/problems/license-key-formatting/
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const s = S.replace(/-/g, '').toUpperCase()
  const a = s.split('').reverse()
  const sliced = []
  let i = 0
  while (a.length) {
    sliced.push(a.splice(i, i+K).reverse().join(''))
  }
  return sliced.reverse().join('-')
};
