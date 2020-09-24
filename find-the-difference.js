// https://leetcode.com/problems/find-the-difference/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const mapS = {}
  const mapT = {}
  for (let i = 0; i < t.length - 1; i++) {
    mapS[s[i]] = (mapS[s[i]] || 0) + 1
    mapT[t[i]] = (mapT[t[i]] || 0) + 1
  }
  mapT[t[t.length-1]] = (mapT[t[t.length-1]] || 0) + 1
  const keys = Object.keys(mapT)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const count = mapS[key]
    if (!count || mapT[key] > count) return key
  }
  return null
};
