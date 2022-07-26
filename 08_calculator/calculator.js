
const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  return array.reduce((total, number) =>
    total + number, 0)
}

const multiply = function(array) {
  return array.reduce((total,number) => total * number,1)
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
  let fac = 1
  while (a >= 1) {
    fac *= a
    a--
  }
  return fac
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
