/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  let nn;
  let num1 = n;

  while (num1) {
    nn = num1 % 10;
    arr.push(nn);
    num1 = (num1 - nn) / 10;
  }
  arr.reverse();
  let min = arr[0];
  let ind = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      ind = i;
    }
  }
  arr.splice(ind, 1);
  const newNum = Number(arr.join(''));
  return newNum;
}

module.exports = deleteDigit;
