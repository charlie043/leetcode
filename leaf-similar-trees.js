// https://leetcode.com/problems/leaf-similar-trees/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const leaves1 = []
  const leaves2 = []
  const dig = (node, leaves) => {
    if (!node) return
    if (!node.right && !node.left) {
      leaves.push(node.val)
    }
    if (node.left) {
      dig(node.left, leaves)
    }
    if (node.right) {
      dig(node.right, leaves)
    }
  }
  dig(root1, leaves1)
  dig(root2, leaves2)
  if (leaves1.length !== leaves2.length) {
    return false
  }
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false
    }
  }
  return true  
};
