// https://leetcode.com/problems/increasing-decreasing-string/
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const ret = []
  let ss = s.split('').sort()
  let prev = null
  while (ss.length) {
    // 1
    let small = ss.shift()
    ret.push(small)
    
    // 2, 3
    while (true) {
      let index = -1
      for (let i = 0; i < ss.length; i++) {
        if (small < ss[i]) {
          index = i
          break
        }
      }
      if (index === -1) {
        break
      }
      small = ss.splice(index, 1)[0]
      ret.push(small)
    }
    
    // 4
    let big = ss.pop()
    ret.push(big)
    
    // 5, 6
    while (true) {
      let index = -1
      for (let i = ss.length - 1; i >= 0; i--) {
        if (big > ss[i]) {
          index = i
          break
        }
      }
      if (index === -1) {
        break
      }
      big = ss.splice(index, 1)[0]
      ret.push(big)
    }
  }
  return ret.join('')
};
