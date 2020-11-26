// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {
  let maxDepth = 0
  const dig = (node, depth = 1) => {
    if (!node) return
    if (maxDepth < depth) {
      maxDepth = depth
    }
    dig(node.right, depth + 1)
    dig(node.left, depth + 1)
  }
  dig(root)
  return maxDepth
};
