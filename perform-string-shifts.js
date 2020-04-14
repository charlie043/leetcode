// https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/529/week-2/3299/
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  const l = s.length
  const _s = s.split('')
  const m = shift.reduce((s, [d, n]) => {
    s += d ? n : -n
    return s
  }, 0) % l
  const r = m >= 0 ? m : l + m
  const a = _s.splice(0, l - r)
  return [..._s,...a].join('')
};
