const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const shuffledArray = array.sort(() => Math.random() - 0.5); 