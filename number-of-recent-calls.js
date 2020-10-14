// https://leetcode.com/problems/number-of-recent-calls/
var RecentCounter = function() {
  this.req = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.req.push(t)
  const from = t-3000
  return this.req.filter((_t) => {
    return from <= _t && _t <= t
  }).length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
