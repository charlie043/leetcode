// https://leetcode.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const merge = (t1, t2) => {
    t1.val += t2.val
    if (t1.left && t2.left) {
        merge(t1.left, t2.left)    
    } else if (t2.left) {
        t1.left = t2.left
    }
    if (t1.right && t2.right) {
        merge(t1.right, t2.right)    
    } else if (t2.right) {
        t1.right = t2.right
    }
    return t1
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    return t1 && t2 ? merge(t1, t2) : t1 || t2
};
