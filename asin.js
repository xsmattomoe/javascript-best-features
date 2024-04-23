const stringReverse = str => str.split("").reverse().join("");
const scriptRootPath = path.join(repositoryRootPath, 'script');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;