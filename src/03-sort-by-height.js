/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const arr1 = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }
  const calcNum = function(a, b) {
    return a - b;
  };
  newArr.sort(calcNum);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== -1) {
      for (let j = 0; j < newArr.length; j++) {
        arr1[i] = newArr[j];
        newArr.shift();
        break;
      }
    }
  }
  return arr1;
}

module.exports = sortByHeight;
