const channelName = getChannelName(channel);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEmptyObject = obj => Object.keys(obj).length === 0;
var DELIM_SIZE = 4;