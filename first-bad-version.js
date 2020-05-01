// https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let s = 1, e = n
      while (s < e) {
        let m = Math.floor((s + e) / 2);
        if (!isBadVersion(m)) {
          s = s === m ? m + 1 : m
        } else {
          e = e === m ? m - 1 : m
        }
      }
      return e
    };
};
