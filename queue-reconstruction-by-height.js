// https://leetcode.com/problems/queue-reconstruction-by-height/
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let ret = []
  people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
  people.forEach(val => {
    ret.splice(val[1], 0, val)
  })
  return ret
};
