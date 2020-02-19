// https://leetcode.com/problems/deepest-leaves-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const sum = (root, sums, depth = 0) => {
    if (!root) return
    if (sums[depth] === undefined) {
        sums[depth] = root.val
    } else {
        sums[depth] += root.val
    }
    sum(root.left, sums, depth + 1)
    sum(root.right, sums, depth + 1)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    const sums = []
    sum(root, sums)
    return sums.pop()
};
