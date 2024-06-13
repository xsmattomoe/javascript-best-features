const result = await makeHttpRequest(url);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());