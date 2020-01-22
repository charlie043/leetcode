// https://leetcode.com/problems/decompress-run-length-encoded-list/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const ret = []
    for (let i = 0; i < nums.length; i += 2) {
        let f = nums[i]
        const v = nums[i+1]
        while (f > 0) {
            ret.push(v)
            f--
        }
    }
    return ret
};
