// https://leetcode.com/problems/average-of-levels-in-binary-tree/
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const levels = []
  const counts = []
  const dig = (node, level = 0) => {
    if (!node) return
    levels[level] = (levels[level] || 0) + node.val
    counts[level] = (counts[level] || 0) + 1
    dig(node.right, level+1)
    dig(node.left, level+1)
  }
  dig(root)
  return levels.map((val, index) => {
    return val / counts[index]
  })
};
