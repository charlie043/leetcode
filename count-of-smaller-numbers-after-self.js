// https://leetcode.com/problems/count-of-smaller-numbers-after-self/
class Node {
  constructor(val) {
    this.val = val
    this.count = 1
    this.child = null
  }
  add () {
    this.count++
  }
  getCount() {
    let count = 0
    let child = this.child
    while (child) {
      count += child.count
      child = child.child
    }
    return count
  }
}

let gNode = null
let nodes = []

const insert = (n) => {
  if (nodes[n]) {
    nodes[n].add()
    return nodes[n]
  } else {
    const node = new Node(n)
    nodes[n] = node
    if (gNode) {
      if (node.val > gNode.val) {
        node.child = gNode
        gNode = node
        return node
      }
      let parent = gNode
      let child = gNode.child
      while (child) {
        if (node.val > child.val) {
          parent.child = node
          node.child = child
          return node
        }
        parent = child
        child = child.child
      }
      parent.child = node
      return node
    } else {
      gNode = node
      return node
    }    
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  gNode = null
  nodes = []
  const ret = []
  for (let i = nums.length - 1; i >= 0; i--) {
    const node = insert(nums[i])
    ret.unshift(node.getCount())
  }
  return ret
};
