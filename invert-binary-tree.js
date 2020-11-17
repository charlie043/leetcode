// https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const invert = (node) => {
    if (!node) return
    const tmp = node.right 
    node.right = node.left
    node.left = tmp
    invert(node.right)
    invert(node.left)
  }
  invert(root)
  return root
};
