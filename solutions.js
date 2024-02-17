// Sum of Two Numbers
function sum(a, b) {
  return a + b;
}
const resultado = suma(5, 3);
console.log(resultado);

// Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
