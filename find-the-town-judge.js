// https://leetcode.com/problems/find-the-town-judge/
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  if (N === 1) return 1
  const p = new Array(N+1)
  p.fill(0)
  trust.forEach(([a, b]) => {
    p[a]--
    p[b]++
  })
  const judge = p.indexOf(N-1)
  return judge || -1
};
