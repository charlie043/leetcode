// https://leetcode.com/problems/distance-between-bus-stops/
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const s = start > destination ? destination : start
    const d = start > destination ? start : destination
    const total = distance.reduce((r, n) => n + r, 0)
    const sd = distance.slice(s, d).reduce((r, n) => n + r, 0)
    const ds = total - sd
    return sd > ds ? ds : sd
};
