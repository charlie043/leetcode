// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0
  const dig = (node, depth = 1) => {
    if (!node) return
    if (depth > max) {
      max = depth
    }
    node.children.forEach((n) => {
      dig(n, depth + 1)
    })
  }
  dig(root)
  return max
};
