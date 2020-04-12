// https://leetcode.com/problems/last-stone-weight/
/**
 * @param {number[]} stones
 * @return {number}
 */
const combine = (stones) => {
  stones.sort((a, b) => a-b)
  const l = stones.pop()
  const l2 = stones.pop()
  const remain = l - l2
  if (remain) {
    return [...stones, remain]
  } else {
    return stones
  }
}
var lastStoneWeight = function(stones) {
  while(true) {
    if (stones.length === 0) return 0
    if (stones.length === 1) return stones[0]   
    stones = combine(stones)
  }
};
