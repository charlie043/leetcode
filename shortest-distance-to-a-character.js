// https://leetcode.com/problems/shortest-distance-to-a-character/
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const sp = S.split(C)
  const ret = []
  return sp.reduce((ret, ws, i) => {
    if (ws === '' && i !== sp.length - 1) {
      ret.push(0)
      return ret
    }
    if (i === 0) {
      let j = ws.length
      while (j) {
        ret.push(j)
        j--
      }
      ret.push(0)
    } else if (i === sp.length - 1) {
      let j = 1
      while (j <= ws.length) {
        ret.push(j)
        j++
      }
    } else {
      for (let j = 0; j < ws.length; j++) {
        ret.push(Math.min(j+1, ws.length - j))
      }
      ret.push(0)
    }
    return ret
  }, [])
};
