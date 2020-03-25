// https://leetcode.com/problems/search-in-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const search = (node, val) => {
  if (node.val === val) { 
    return node 
  }
  if (node.right && node.left) {
    return search(node.right,val) || search(node.left,val)
  }
  if (node.right) return search(node.right,val)
  if (node.left) return search(node.left,val)
  return null
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  return search(root, val)
};
