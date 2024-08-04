const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
function myAPITS(someString: string, someNum: number) { ... };
const merge = [...new Set(a.concat(b))];