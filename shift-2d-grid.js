// https://leetcode.com/problems/shift-2d-grid/
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const x = grid[0].length
    const y = grid.length
    const xy = x * y
    const _k = k % (xy)
    if (_k === 0) {
        return grid
    } else if (_k % x === 0) {
        const ny = (_k / x) % y
        const pre = grid.splice(y-ny, ny)
        return pre.concat(grid)
    } else {
        const flatten = grid.reduce((flatten, row) => {
            return flatten.concat(row)
        }, [])
        const pre = flatten.splice(xy-_k, _k)
        const rotated = pre.concat(flatten)
        const chunked = []
        for (let i = 0 ; i < xy ; i += x) {
            chunked.push(rotated.slice(i, i+x))
        }
        return chunked
    }
};
