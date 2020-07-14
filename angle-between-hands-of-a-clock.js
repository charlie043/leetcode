// https://leetcode.com/problems/angle-between-hands-of-a-clock/
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const m = 360*(minutes/60)
  const h = 360*((hour%12)/12) + m/12
  const sub = Math.abs(m - h)
  return 180 > sub ? sub : 360 - sub
};
