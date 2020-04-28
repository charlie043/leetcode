// https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/531/week-4/3313/
/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  this.set = new Set()
  this.unique = []
  nums.forEach((n) => {
    if (this.set.has(n)) {
      this.unique.splice(this.unique.indexOf(n), 1)
    } else {
      this.unique.push(n)
      this.set.add(n)
    }
  })
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  return this.unique.length ? this.unique[0] : -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.set.has(value)) {
    this.unique.splice(this.unique.indexOf(value), 1)
  } else {
    this.unique.push(value)
    this.set.add(value)
  }   
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
