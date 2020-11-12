// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = {}
  for (let i = 0; i < groupSizes.length; i++ ) {
    const size = groupSizes[i]
    if (map[size]) {
      map[size].push(i)
    } else {
      map[size] = [i]
    }
  }
  const ret = []
  for (const size of Object.keys(map)) {
    const nums = map[size]
    while (nums.length) {
      let i = 0
      const seq = []
      while (i++ < size) {
        seq.push(nums.shift())
      }
      ret.push(seq)
    }
  }
  return ret
};
