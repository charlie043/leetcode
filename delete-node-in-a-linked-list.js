// https://leetcode.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let _node = node
  while (true) {
    const nextNode = _node.next
    _node.val = nextNode.val
    if (!nextNode.next) {
      _node.next = null
      break
    } 
    _node = nextNode
  }
};
