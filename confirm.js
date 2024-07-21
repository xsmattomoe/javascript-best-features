const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const currentDate = () => new Date().toLocaleDateString('en-US');
const timeFromDate = date => date.toTimeString().slice(0, 8);