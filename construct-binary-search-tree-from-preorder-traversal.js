// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
const setNode = (node, newNode) => {
  if (node.val > newNode.val) {
    if (node.left) {
      setNode(node.left, newNode)
    } else {
      node.left = newNode
    }
  } else {
     if (node.right) {
      setNode(node.right, newNode)
    } else {
      node.right = newNode
    }   
  }
}
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (!preorder.length) return[]
  
  const rootNode = new TreeNode(preorder.shift())
  while(preorder.length) {
    const newNode = new TreeNode(preorder.shift())
    setNode(rootNode, newNode)
  }
  return rootNode
};
