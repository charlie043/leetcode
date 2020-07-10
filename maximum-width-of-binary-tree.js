// https://leetcode.com/problems/maximum-width-of-binary-tree/
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) return 0
  let maxWidth = 1
  const map = {}
  function digg(node, x = 0, y = 0) {
    if (!node) return
    map[y] = map[y] ? map[y] : {}
    if (!map[y].min && !map[y].max) {
      map[y].min = x
      map[y].max = x
    } else if (map[y].min > x) {
      map[y].min = x
    } else if (map[y].max < x) {
      map[y].max = x
    }
    if (x === 0) {
      digg(node.left, -1, y+1)
      digg(node.right, 1, y+1)
    } else if (x > 0) {
      digg(node.left, x*2-1, y+1)
      digg(node.right, x*2, y+1)
    } else {
      digg(node.left, x*2, y+1)
      digg(node.right, x*2+1, y+1)     
    }
  }
  digg(root)
  for (let level in map) {
    const { min, max } = map[level]
    let width = max - min
    if ((max < 0 && min < 0) || (max > 0 && min > 0)) {
      width++
    }
    if (width > maxWidth) {
      maxWidth = width
    }
  }
  return maxWidth
};
