/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = String(n);
  let arr = num.split('');
  let res;
  while (arr.length !== 1) {
    const arr1 = arr.map(Number);
    const reducer = (a, b) => a + b;
    res = arr1.reduce(reducer);
    arr = String(res).split('');
  }
  return res;
}

module.exports = getSumOfDigits;
