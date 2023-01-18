module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.map((el, ind) => !(ind % 2) ? el : el.reverse()).flat()
}
