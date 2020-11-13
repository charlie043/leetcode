// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const vals = []
  const list = (node) => {
    if (!node) return
    vals.push(node.val)
    list(node.right)
    list(node.left)
  }
  list(root1)
  list(root2)
  vals.sort((a, b) => a-b)
  return vals 
};
