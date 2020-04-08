// https://leetcode.com/problems/middle-of-the-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (head.next === null) return head
  let count = 0
  let node = head
  const arr = []
  while (node) {
    count++
    arr.push(node)
    node = node.next
  }
  return arr[Math.floor(count/2)]
};
