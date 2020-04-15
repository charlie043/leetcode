// https://leetcode.com/problems/cousins-in-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * 
 */
const getDepthAndParent = (node, target, depth = 0) => {
  if (!node) return false
  if (node.right && node.right.val === target) {
    return [depth+1, node.val]
  }
  if (node.left && node.left.val === target) {
    return [depth+1, node.val]
  }
  return getDepthAndParent(node.right, target, depth+1) || getDepthAndParent(node.left, target, depth+1)
}

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  if (!root || root.val === x || root.val === y) return false
  
  const [xd, xp] = getDepthAndParent(root, x)
  const [yd, yp] = getDepthAndParent(root, y)
  return xd === yd && xp !== yp
};
