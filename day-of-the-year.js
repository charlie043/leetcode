// https://leetcode.com/problems/day-of-the-year/

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const isLeapYear = (y) => {
    return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
}

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [y, m, d] = date.split('-').map(s => parseInt(s))
    let count = d
    
    if (m === 1) return count
    
    let _m = m-1
    while (_m > 0) {
        count += days[_m-1]
        _m--
    }
    if (m > 2 && isLeapYear(y)) {
        count++
    }
    return count
};
