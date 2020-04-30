// https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/532/week-5/3315/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const next = (node, arr) => {
  if (!node) return false
  const v = arr.shift()
  if (node.val === v) {
    if (arr.length) {
      return next(node.right, [...arr]) || next(node.left, [...arr])
    } else {
      return !node.right && !node.left
    }
  }
  return false
}

/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  if (!arr.length) return true
  return next(root, arr)
};
