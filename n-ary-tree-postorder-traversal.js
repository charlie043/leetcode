// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) return []
  let parent = root
  const mergeChildren = (parent) => {
    if (!parent || !parent.children || !parent.children.length) return []
    const children = parent.children.reduce((ret, child) => {
      return [...ret, ...mergeChildren(child), child.val]
    }, [])
    return children
  }
  return [...mergeChildren(root), root.val]
};
