// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const dig = (node) => {
    if (!node) return []
    const gChildren = node.children.reduce((gChildren, child) => {
      return [...gChildren, ...dig(child)]
    }, [])
    return [node.val, ...gChildren]
  }
  return dig(root)
};
