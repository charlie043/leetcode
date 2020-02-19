// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
const getChildrenSum = (root) => {
    if (!root) return 0
    let sum = 0
    if (root.left) {
        sum += root.left.val
    }
    if (root.right) {
        sum += root.right.val
    }
    return sum
}

const getGrandChildrenSum = (root) => {
    return getChildrenSum(root.right) + getChildrenSum(root.left)
}

const sum = (root) => {
    if (!root) return 0
    let _sum = 0
    if (root.val % 2 === 0) {
        _sum = getGrandChildrenSum(root)       
    }
    return _sum + sum(root.left) + sum(root.right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    return sum(root)
};
