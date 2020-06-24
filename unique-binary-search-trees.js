// https://leetcode.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
const factorial = (num) => {
  return num <= 0 ? 1 : num * factorial(num - 1)
}

var numTrees = function(n) {
  return factorial( 2 * n ) / ( factorial( n + 1 ) * factorial( n ) );
}
