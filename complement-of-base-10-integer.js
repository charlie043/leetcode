// https://leetcode.com/problems/complement-of-base-10-integer/
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(N.toString(2).split('').map(n=>n=="0"?"1":"0").join(''),2)
};
