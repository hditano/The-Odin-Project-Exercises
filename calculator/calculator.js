function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(array) {
  let result = array.reduce((sum, current) => sum + current, 0);
	return result;
}

function multiply(array) {
	let result = array.reduce((sum, current) => sum * current, 1);
	return result;
}

function power(base, power) {
  return Math.pow(base, power);
}

function factorial(a) {
  let total = 1;
  for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
