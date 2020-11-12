// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let ret = null
  const dig = (node) => {
    if (!node) return
    if (node.val === target.val) {
      ret = node
      return
    }
    dig(node.right)
    dig(node.left)
  }
  dig(cloned)
  return ret
};
