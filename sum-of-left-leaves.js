// https://leetcode.com/problems/sum-of-left-leaves/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0
  let sum = 0
  const dig = (node) => {
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val
      } else {
        dig(node.left)
      }
    }
    if (node.right) {
      dig(node.right)
    }
  }
  dig(root)
  return sum
};
