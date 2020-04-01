// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const dig = (root, depth, ret) => {
  if (ret[depth]) {
    ret[depth].push(root.val)
  } else {
    ret[depth] = [root.val]
  }
  if (root.left) {
    dig(root.left, depth+1, ret)
  }
  if (root.right) {
    dig(root.right, depth+1, ret)
  }
  return ret
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (root === null) return []
  const ret = []
  dig(root, 0, ret)
  return ret.map((row) => {
    return Math.max(...row)
  })
};
