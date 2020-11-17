// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const memo = []
const isPrime = num => {
  if (typeof memo[num] === 'Boolean') return memo[num]
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

var countPrimeSetBits = function(L, R) {
  let ret = 0
  for (let i = L; i <= R; i++) {
    let count = 0
    i.toString(2).split('').forEach((d) => {
      if (d === '1') count++
    })
    if (isPrime(count)) ret++
  }
  return ret
};
