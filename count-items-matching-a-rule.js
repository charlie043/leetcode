// https://leetcode.com/problems/count-items-matching-a-rule/
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let n = 0
  items.forEach(([type, color, name]) => {
    if (ruleKey === 'type' && type === ruleValue) {
      n++
    } else if (ruleKey === 'color' && color === ruleValue) {
      n++
    } else if (ruleKey === 'name' && name === ruleValue) {
      n++
    }
  })
  return n
};
