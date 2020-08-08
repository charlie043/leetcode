// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const map = {}
  const dig = (node, v = 0, h = 0) => {
    if (!node) return
    if (map[v]) {
      map[v].push({ val: node.val, h })
    } else {
      map[v] = [{ val: node.val, h }]
    }
    dig(node.right, v+1, h+1)
    dig(node.left, v-1, h+1)
  }
  dig(root)
  
  const keys = Object.keys(map).map((k) => parseInt(k)).sort((a, b) => a - b)
  return keys.map((key) => map[key].sort(({val: val1, h: h1}, {val: val2, h: h2}) => {
    if (h1 === h2) {
      return val1 - val2
    }
    return h1 - h2
  }).map(({ val }) => val))
};
