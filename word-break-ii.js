// https://leetcode.com/problems/word-break-ii/
// TLE ver :cry:
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  if (!s) return []
  if ()
  
  const ret = []
  const getWords = (_s) => {
    return wordDict.reduce((r, w) => {
      if (_s.indexOf(w) === 0) {
        r.push(w)
      }
      return r
    }, [])
  }
  const check = (_s, text = '') => {
    if (!_s.length) {
      ret.push(pattern)
      return
    }
    
    const words = getWords(_s)
    if (!words.length) return
    
    words.forEach((w) => {
      check(_s.replace(w, ''), text ? `${text} ${w}` : w)
    })
  }
  check(s)
  return ret
};
