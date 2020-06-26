// https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
var sumNumbers = function(root) {
    let sum = 0
    const digg = (node, strN = '0') => {
        if (!node) {
            return
        }
        const str = `${strN}${node.val || 0}`
        if (!node.right && !node.left) {
            sum += Number(str)
            return
        }
        digg(node.left, str)
        digg(node.right, str)
    }
    digg(root)
    return sum
};
