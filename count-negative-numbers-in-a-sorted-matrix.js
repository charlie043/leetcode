// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.reduce((c, row) => {
        return c + row.filter(n => n < 0).length
    }, 0)
};
