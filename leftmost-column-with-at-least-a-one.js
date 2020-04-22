// https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/530/week-3/3306/
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  let [x, y] = binaryMatrix.dimensions()
  let last = null
  x--
  y--
  while (y >= 0) {
    let count = 0
    while (x >= 0) {
      count += binaryMatrix.get(x, y)
      if (count > 0) {
        last = y  
        break
      }
      x--
    }
    if (last !== null && (count === 0 || y === 0)) {
      return last
    }
    if (count === 0) {
      return -1
    }
    y--
  }
  return -1
};
