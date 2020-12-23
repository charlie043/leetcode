// https://leetcode.com/problems/reformat-phone-number/
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  let ret = ''
  const nums = number.replace(/\ /g, '').replace(/-/g, '').split('')
  while (nums.length) {
    if (nums.length < 3) {
      ret += `${nums.splice(0, nums.length).join('')}`
    } else if (nums.length === 4) {
      ret += `${nums.splice(0, 2).join('')}-${nums.splice(0, 2).join('')}`
    } else {
      ret += `${nums.splice(0, 3).join('')}`
    }
    if (nums.length) {
      ret += '-'
    }
  }
  return ret
};
