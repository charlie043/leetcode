// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const _count = (str) => {
  const _str = str.split('')
  return _str.reduce((counts, s) => {
    counts[s] = counts[s] ? counts[s] + 1 : 1
    return counts
  }, {len: _str.length})
}
const anagrams = (counts, str) => {
  const count = _count(str)
  for (let i = 0; i < counts.length; i++) {
    const [condition, ans] = counts[i]
    if (condition.len !== str.length) {
      continue
    }
    const isSame = Object.keys(condition).reduce((ret, s) => {
      return ret && condition[s] === count[s]
    }, true)
    if (isSame) {
      counts[i] = [condition, [...ans, str]]
      return counts
    }
  }
  counts.push([count, [str]])
  return counts
}
var groupAnagrams = function(strs) {
  if (!strs.length) return strs
  let counts = []
  for (let i = 0; i < strs.length; i++) {
    counts = anagrams(counts, strs[i])
  }
  return counts.map(([condition, ans]) => ans)
};
