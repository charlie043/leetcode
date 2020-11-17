// https://leetcode.com/problems/fibonacci-number/
/**
 * @param {number} N
 * @return {number}
 */
const memo = [0, 1]
var fib = function(N) {
  if (N === 0) return 0
  if (N === 1) return 1
  for (let i = 2; i <= N; i++) {
    const n0 = memo[i - 2]
    const n1 = memo[i - 1]
    memo[i] = n0 + n1
  }
  return memo[N]
};
