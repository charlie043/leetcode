// https://leetcode.com/problems/maximum-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const createNode = (nums) => {
  const rootNode = new TreeNode(Math.max(...nums))
  const index = nums.indexOf(rootNode.val)
  const left = nums.slice(0, index)
  const right = nums.slice(index + 1, nums.length)
  if (left.length) rootNode.left = createNode(left)
  if (right.length) rootNode.right = createNode(right)
  return rootNode
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  return createNode(nums)
};
