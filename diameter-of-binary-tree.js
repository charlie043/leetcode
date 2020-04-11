
// https://leetcode.com/problems/diameter-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const getDepth = (node, depth = 0) => {
  if (!node) return depth
  return Math.max(getDepth(node.right, depth+1), getDepth(node.left, depth+1))
}

const getLength = (node) => {
  if (!node) return 0
  return getDepth(node.right) + getDepth(node.left)
}

const dig = (node) => {
  if (!node) return 0
  return Math.max(getLength(node), dig(node.left), dig(node.right))
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  return dig(root)
};
