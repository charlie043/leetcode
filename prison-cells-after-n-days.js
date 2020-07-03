// https://leetcode.com/problems/prison-cells-after-n-days/
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let i = 0
  let y = cells
  const set = new Set()
  while (i < N) {
    const str = y.join('')
    if (set.has(str)) {
      const ary = Array.from(set)
      const s = ary.indexOf(str)
      const loop = ary.length - s
      const index = (N - s) % loop
      return ary[index + s].split('').map(n => parseInt(n, 10))
    }
    set.add(str)
    const _cells = []
    for (let j = 0; j < cells.length; j++) {
      _cells[j] = y[j-1] === y[j+1] ? 1 : 0
    }
    y = _cells
    i++
  }
  return y
};
