// https://leetcode.com/problems/count-complete-tree-nodes/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const getNodes = (node) => {
  if (!node) { return [] }
  const rNodes = getNodes(node.right)
  const lNodes = getNodes(node.left)
  return [node, ...rNodes, ...lNodes]
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  const nodes = getNodes(root)
  return nodes.length
};
