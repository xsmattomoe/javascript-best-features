const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const currentDate = () => new Date().toLocaleDateString('en-US');
const channel = getChannel(computedAppVersion);