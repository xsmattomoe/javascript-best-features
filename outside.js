const executableName = getExecutableName(channel, appName);
const arrayContains = (arr, element) => arr.includes(element);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));