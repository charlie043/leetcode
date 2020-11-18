// https://leetcode.com/problems/find-common-characters/
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const a = A.sort((a, b) => a.length - b.length).map((s) => s.split(''))
  const f = a[0]
  const ret = []
  while (f.length) {
    let match = true
    const s = f.shift()
    for (let i = 1; i < a.length; i++) {
      const index = a[i].indexOf(s)
      if (index >= 0) {
        a[i].splice(index, 1)
      } else {
        match = false
      }
    }
    if (match) {
      ret.push(s)
    }
  }
  return ret
};
