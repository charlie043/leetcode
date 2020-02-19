// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const ret = []
    for (let i = 0; i < arr.length - 1 ; i++) {
        const gst = Math.max(...arr.slice(i + 1, arr.length))
        ret.push(gst)
    }
    ret.push(-1)
    return ret
};
