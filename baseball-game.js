// https://leetcode.com/problems/baseball-game/
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const scores = []
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i]
    switch (op) {
      case '+': {
        scores.push(scores[scores.length-1] + scores[scores.length-2])
        break
      }
      case 'D': {
        scores.push(2 * scores[scores.length-1])
        break
      }
      case 'C': {
        scores.pop()
        break;
      }
      default: {
        scores.push(parseInt(op))
      }
    }
  }
  return scores.reduce((sum, score) => sum+score, 0)
};
