// https://leetcode.com/problems/relative-sort-array/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map = {}
  arr1.forEach((n) => {
    if (map[n]) {
      map[n].push(n)
    } else {
      map[n] = [n]
    }
  })
  let ret = []
  arr2.forEach((n) => {
    ret = [...ret, ...map[n]]
    delete map[n]
  })
  console.log(map)
  let remains = []
  for (let n of Object.keys(map)) {
    remains = [...remains, ...map[n]]
  }
  return [...ret, ...remains.sort((a, b) => a - b)]
};
