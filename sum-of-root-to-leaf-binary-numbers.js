// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
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
var sumRootToLeaf = function(root) {
  if (!root) return 0
  
  let sum = 0
  const re = (node, values = []) => {
    if (!node.right && !node.left) {
      values.push(node.val)
      sum += parseInt(values.join(''), 2)
      return
    }
    if (node.right) {
      re(node.right, [...values, node.val])
    }
    if (node.left) {
      re(node.left, [...values, node.val])
    }
  }
  re(root)
  return sum
};
