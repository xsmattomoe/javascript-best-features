console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const currentDate = () => new Date().toLocaleDateString('en-US');
[foo, bar] = [bar, foo];