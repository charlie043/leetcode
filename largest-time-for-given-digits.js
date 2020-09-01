// https://leetcode.com/problems/largest-time-for-given-digits/
/**
 * @param {number[]} A
 * @return {string}
 */
const generatePermutations = (rest, ret = [], ary = []) => {
  if (rest.length) {
    for (let i = 0; i < rest.length ; i++) {
      const _rest = [...rest]
      const n = _rest.splice(i, 1)
      generatePermutations(_rest, ret, [...ary, ...n])
    }
  } else {
    const date = new Date(`2020-01-01 ${ary[0]}${ary[1]}:${ary[2]}${ary[3]}`)
    if (date.toString() !== 'Invalid Date' && date.getDate() === 1) {
      ret.push(date)
    }
  }
  return ret
}
var largestTimeFromDigits = function(A) {
  const permutations = generatePermutations(A)
  if (permutations.length) {
    permutations.sort((a, b) => b - a)
    const b = permutations[0]
    return `${b.getHours().toString().padStart(2, 0)}:${b.getMinutes().toString().padStart(2, 0)}`
  } else {
    return ''
  }
};
