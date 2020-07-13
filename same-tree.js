// https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const isSame = (node1, node2) => {
  if (node1 === null && node2 === null) { 
    return true
  }
  if (node1 && node2 && node1.val === node2.val) {
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
  }
  return false
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return isSame(p, q)
};
