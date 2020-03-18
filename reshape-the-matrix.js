// https://leetcode.com/problems/reshape-the-matrix/
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const _nums = nums.reduce((flatten, row) => {
    return [...flatten,...row]
  }, [])
  if (_nums.length !== r*c) {
    return nums
  }
  const ret = []
  for (let i = 0; i < r; i++) {
    const row = [..._nums.splice(0, c)]
    ret.push(row)
  }
  return ret
};
