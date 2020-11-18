// https://leetcode.com/problems/design-an-ordered-stream/
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.pointer = 1
  this.stream = []
    
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.stream[id] = value
  let pointer = this.pointer
  const ret = []
  while (this.stream[pointer]) {
    ret.push(this.stream[pointer])
    pointer++  
  }
  this.pointer = pointer
  return ret
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
