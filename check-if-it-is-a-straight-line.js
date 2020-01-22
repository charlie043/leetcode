// https://leetcode.com/problems/check-if-it-is-a-straight-line/
const getTilt = (c, i) => {
    const dx = c[i+1][0] - c[i][0]
    const dy = c[i+1][1] - c[i][1]
    return dy === 0 ? 0 : dx / dy
}

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const t = getTilt(coordinates, 0)
    for (let i = 1 ; i < coordinates.length - 1 ; i++) {
        if ( t !== getTilt(coordinates, i)) {
            return false
        }
    }
    return true
};
