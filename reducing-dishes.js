// https://leetcode.com/problems/reducing-dishes/
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const calc = (i, s) => {
  let sum = 0
  for (let j = 0; i + j < s.length; j++) {
    sum += (j+1) * s[i+j]
  }
  return sum
}

var maxSatisfaction = function(satisfaction) {
  if (satisfaction.reduce((ret, s) => ret && s < 0, true)) {
    return 0
  }
  const sorted = satisfaction.sort((a, b) => a - b)
  let i = sorted.findIndex((n) => n >= 0)
  while (i) { 
    const a = calc(i, sorted)
    if (i > 0) {
      const b = calc(i-1, sorted)
      if (a > b) {
        return a
      }
    } else if (i === 0) {
      return a
    }
    i--
  }
  return calc(0, sorted)
};
