const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const currentDate = () => new Date().toLocaleDateString('en-US');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';