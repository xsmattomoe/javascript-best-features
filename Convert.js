const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const merge = Object.assign({}, obj1, obj2);