// https://leetcode.com/problems/ugly-number-ii/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  if (!n) return 0
  const cache = [1]
  let p2 = 0, p3 = 0, p5 = 0
  while (cache.length < n) {
    const n2 = cache[p2] * 2
    const n3 = cache[p3] * 3
    const n5 = cache[p5] * 5
    const n = Math.min(n2, n3, n5)
    if (n === n2) p2++
    if (n === n3) p3++
    if (n === n5) p5++
    cache.push(n)
  }
  return cache[n-1]
};
