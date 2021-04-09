/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  const newMatrix = [];
  for (let i = 0; i < row; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < column; j++) {
      newMatrix[i][j] = 0;
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === true) {
        if ((i - 1) !== -1 && (j - 1) !== -1) {
          newMatrix[i - 1][j - 1]++;
          newMatrix[i - 1][j]++;
          newMatrix[i - 1][j + 1]++;
          newMatrix[i][j - 1]++;
          newMatrix[i][j + 1]++;
          newMatrix[i + 1][j - 1]++;
          newMatrix[i + 1][j]++;
          newMatrix[i + 1][j + 1]++;
        } else {
          newMatrix[i][j + 1]++;
          newMatrix[i + 1][j]++;
          newMatrix[i + 1][j + 1]++;
        }
      }
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
