// https://leetcode.com/problems/crawler-log-folder/
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let depth = 0
  logs.forEach((log) => {
    switch (log) {
      case '../': {
        if (depth > 0) depth--
        break
      }
      case './': break;       
      default: depth++;
    }
  })
  return depth > 0 ? depth : 0
};
