// https://leetcode.com/problems/subtree-of-another-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const match = (n1, n2) => {
  if (n1 === null && n2 === null) return true
  if (n1 && n2 && n1.val === n2.val) {
    return match(n1.left, n2.left) && match(n1.right, n2.right)
  }
  return false
}

const findBaseRoots = (s, val) => {
  if (!s) return []
  if (s.val === val) { 
    return [s, ...findBaseRoots(s.right, val), ...findBaseRoots(s.left, val)]
  }
  return [...findBaseRoots(s.right, val), ...findBaseRoots(s.left, val)]
}
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  const nodes = findBaseRoots(s, t.val)
  return nodes.reduce((ret, root) => {
    return ret || match(root, t)   
  }, false)
};
