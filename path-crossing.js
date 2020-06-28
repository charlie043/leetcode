// https://leetcode.com/problems/path-crossing/
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  const point = [0, 0]
  const set = new Set()
  set.add('00')
  for (const d of path) {
    switch(d) {
      case 'N': point[1]++;break;
      case 'E': point[0]++;break;
      case 'W': point[0]--;break;
      case 'S': point[1]--;break;
      default: {}
    }
    const p = `${point[0]}${point[1]}`
    if (set.has(p)) {
      return true
    }
    set.add(p)
  }
  return false
};
