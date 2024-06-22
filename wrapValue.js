const symbolsPath = path.join(buildOutputPath, 'symbols');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);