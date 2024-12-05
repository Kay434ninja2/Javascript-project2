// Utility Functions

// String Functions
const reverseString = (str) => str.split('').reverse().join('');
const countCharacters = (str) => str.length;
const capitalizeWords = (sentence) =>
  sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Array Functions
const findMaximum = (arr) => Math.max(...arr);
const findMinimum = (arr) => Math.min(...arr);
const sumOfArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
const filterArray = (arr, condition) => arr.filter(condition);

// Math Functions
const factorial = (n) => {
  if (n < 0) throw new Error("Factorial not defined for negative numbers.");
  return n === 0 ? 1 : n * factorial(n - 1);
};

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const fibonacciSequence = (terms) => {
  if (terms <= 0) throw new Error("Number of terms must be greater than 0.");
  const sequence = [0, 1];
  while (sequence.length < terms) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence.slice(0, terms);
};

// Demonstrating the Functions
console.log("String Functions:");
console.log(`Reverse 'hello': ${reverseString("hello")}`);
console.log(`Count characters in 'hello': ${countCharacters("hello")}`);
console.log(`Capitalize 'hello world': ${capitalizeWords("hello world")}`);

console.log("\nArray Functions:");
const nums = [1, 2, 3, 4, 5];
console.log(`Max: ${findMaximum(nums)}`);
console.log(`Min: ${findMinimum(nums)}`);
console.log(`Sum: ${sumOfArray(nums)}`);
console.log(`Filter even numbers: ${filterArray(nums, (n) => n % 2 === 0)}`);

console.log("\nMath Functions:");
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Is 7 prime? ${isPrime(7)}`);
console.log(`Fibonacci (10 terms): ${fibonacciSequence(10)}`);
