const sumAll = function (num1, num2) {
  let total = 0;
  if (num1 > 0 && num2 > 0) {
    for (let i = 0; i <= num2; i++) {
      total += i;
    } else if(num1 < 0 || num2 < 0) {
      return 'ERROR';
    } else if (num1 !== isNaN || num2 !== isNaN) {
      return 'ERROR';
    } else {
      break;
    }
    return total;
}
}
module.exports = sumAll;
