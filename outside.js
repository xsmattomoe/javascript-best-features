const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isEmptyArray = arr => !arr.length;