/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index;
  let first = 0;
  let last = array.length;
  let middle;
  let find = false;
  while (find === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      index = middle;
      find = true;
    } else if (array[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return index;
}

module.exports = findIndex;
