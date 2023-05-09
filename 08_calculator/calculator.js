const add = function(x,y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(array) {
	let count = 0;
  for(let i = 0; i < array.length;i ++){
    count += array[i]
  }
  return count
};

const multiply = function(array) {
  let count = 0;
  for(let i = 0; i < array.length;i ++){
    count *= array[i]
  }
  return count
  // return array.reduce((total, current) => total + current, 0);
};

const power = function(x,y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
  if(n === 0){
    return 1;
  }
	return n!=n*(n-1)
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
