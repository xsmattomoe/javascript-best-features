const updated = numbers.filter(element => element > 6);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isArray = (arr) => Array.isArray(arr);