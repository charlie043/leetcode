// https://leetcode.com/problems/minimum-time-visiting-all-points/

const calcSec = (p0, p1) => {
    const dx = Math.abs(p0[0] - p1[0])
    const dy = Math.abs(p0[1] - p1[1])
    return dx > dy ? dy + (dx - dy) : dx + (dy - dx)
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let sec = 0
    for (let i = 0; i < points.length - 1; i++) {
        sec += calcSec(points[i], points[i+1])
    }
    return sec
};
