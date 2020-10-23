// https://leetcode.com/problems/reverse-string-ii/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const rev = (str, k, n = 0) => {
    const a = str.split('') 
    const point = k*n*2
    const fore = a.splice(0, point)
    const reve = a.splice(0, k)
    const _s = `${fore.join('')}${reve.reverse().join('')}${a.join('')}`
    return str.length > (point + 2*k) ? rev(_s, k, n+1) : _s
  }
  return rev(s, k)
};
