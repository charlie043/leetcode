// https://leetcode.com/problems/valid-parentheses/

const _isValid = (s) => {
    if (s.length === 0) {
        return true
    } 
    const _s = s.replace('()', '').replace('[]', '').replace('{}', '')
    return _s.length === s.length ? false : _isValid(_s)
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    return s.length % 2 === 0 ? _isValid(s) : false
};
