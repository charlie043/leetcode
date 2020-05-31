// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const p = Math.pow(10, 9) + 7
const getMax = (m, cuts) => {
  cuts.sort((a, b) => a-b)
  let base = 0
  let max = 0
  cuts.forEach((w) => {
    const _w = w - base
    if (max < _w) {
      max = _w
    }
    base = w
  })
  if (max < m - base) {
    max = m - base
  }
  return max
}
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  const maxH = getMax(h, horizontalCuts)
  const maxW = getMax(w, verticalCuts)
  const x = maxH * maxW
  return (x > p) ? x % p : x
};
