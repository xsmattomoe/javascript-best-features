const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const isEven = (num) => num % 2 === 0;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);