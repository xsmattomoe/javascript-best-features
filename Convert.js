const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const lastElement = arr => arr[arr.length - 1];
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);