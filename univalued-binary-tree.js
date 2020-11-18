// https://leetcode.com/problems/univalued-binary-tree/
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let diff = false
  const val = root.val
  const dig = (node) => {
    if (!node || diff) return
    if (node.val !== val) {
      diff = true
      return
    }
    dig(node.left)
    dig(node.right)
  }
  dig(root)
  return !diff
};
