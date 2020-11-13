// https://leetcode.com/problems/all-paths-from-source-to-target/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const n = graph.length - 1
  const ret = []
  const forwardTo = (index = 0, path = [0]) => {
    if (index === n) {
      ret.push(path)
    }
    const next = graph[index]
    next.forEach((i) => {
      forwardTo(i, [...path, i])
    })
  }
  forwardTo()
  return ret
};
