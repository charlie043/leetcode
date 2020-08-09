// https://leetcode.com/problems/path-sum-iii/
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  const freq = { 0: 1 }
  const dfs = (root, _sum) => {
    if (!root) return 0
    _sum += root.val
    const prev = _sum - sum
    let res = freq[prev] || 0
    freq[_sum] = (freq[_sum] || 0) + 1
    res += dfs(root.left, _sum) + dfs(root.right, _sum)
    freq[_sum]--
    return res
  }
  return dfs(root, 0)
};
