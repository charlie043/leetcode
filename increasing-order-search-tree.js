// https://leetcode.com/problems/increasing-order-search-tree/
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
var increasingBST = function(root) {
  const vals = []
  const dig = (node) => {
    if (!node) return
    vals.push(node.val)
    dig(node.left)
    dig(node.right)
  }
  dig(root)
  vals.sort((a, b) => a - b)
  const newRoot = new TreeNode(vals.shift())
  let node = newRoot
  while (vals.length) {
    node.right = new TreeNode(vals.shift())
    node = node.right
  }
  return newRoot
};
