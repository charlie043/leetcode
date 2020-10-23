// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const i = letters.findIndex((l) => l > target)
  return i > -1 ? letters[i] : letters[0]
};
