// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const recolor = (image, sr, sc, sourceColor, newColor) => {
  const r = image.length
  const c = image[0].length
  if (sr < 0 || r <= sr || sc < 0 || c <= sc) {
    return
  }
  const color = image[sr][sc]
  if (color === sourceColor) {
    image[sr][sc] = newColor
    recolor(image, sr+1, sc, sourceColor, newColor)
    recolor(image, sr-1, sc, sourceColor, newColor)
    recolor(image, sr, sc+1, sourceColor, newColor)
    recolor(image, sr, sc-1, sourceColor, newColor)
  }
}

var floodFill = function(image, sr, sc, newColor) {
  const sourceColor = image[sr][sc]
  if (newColor === sourceColor) {
    return image
  }
  recolor(image, sr, sc, sourceColor, newColor)
  return image
};
