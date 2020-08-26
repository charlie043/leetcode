// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const ret = []
  let i = 0
  while (++i <= n) {
    if (i%3 === 0) {
      ret.push(i%5 === 0 ? 'FizzBuzz' : 'Fizz')
      continue
    }
    if (i%5 === 0) {
      ret.push('Buzz')
      continue
    }
    ret.push(`${i}`)
  }
  return ret
};
