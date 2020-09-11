// https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let max = nums[0], min = nums[0], output = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        const prevMax = max
        const n = nums[i]
        
        max = Math.max(n, prevMax * n, min * n)
        min = Math.min(n, prevMax * n, min * n)
        
        output = Math.max(max, output)
    }
    return output
};
