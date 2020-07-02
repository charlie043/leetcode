// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const ret = []
  const dist = (node, level = 0) => {
    if (!node) return
    if (ret[level]) {
      ret[level].push(node.val)
    } else {
      ret[level] = [node.val]
    }
    dist(node.left, level+1)
    dist(node.right, level+1)
  }
  dist(root)
  return ret.reverse()
};
