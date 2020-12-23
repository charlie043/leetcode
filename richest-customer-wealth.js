// https://leetcode.com/problems/richest-customer-wealth/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0
  for (const account of accounts) {
    let sum = 0
    for (const cache of account) {
      sum += cache 
    }
    if (sum > max) {
      max = sum
    }
  }
  return max
};
