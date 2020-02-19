// https://leetcode.com/problems/range-sum-of-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const sum = (root, L, R) => {
    if (!root) return 0
    return (( L <= root.val && root.val <= R ) ? root.val : 0) + sum(root.left, L, R) + sum(root.right, L, R)
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    return sum(root, L, R)
};
