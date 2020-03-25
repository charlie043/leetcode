// https://leetcode.com/problems/my-calendar-i/
var MyCalendar = function() {
  this.reserved = []
  this.isValid = ([start, end], s, e) => {
    if (end <= s || e <= start) return true
    if (s < start) {
      return e < start
    }
    return false
  }
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  const isValid = this.reserved.map((range) => {
    return this.isValid(range, start, end)
  }).reduce((ret, ok) => {
    return ret && ok
  }, true)
  if (isValid) this.reserved.push([start, end])
  return isValid
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
