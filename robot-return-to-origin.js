// https://leetcode.com/problems/robot-return-to-origin/
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const count = { R: 0, L: 0, U: 0, D: 0 }
  for (let i = 0; i < moves.length; i++) {
    count[moves[i]]++
  }
  return count.R === count.L && count.U === count.D
};
