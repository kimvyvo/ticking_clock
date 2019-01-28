function startClock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkClock(m);
    s = checkClock(s);
    var clock = React.createElement('h1', null, `The time is ${h}:${m}:${s}.`);
    ReactDOM.render(clock, document.getElementById('app'));
    var t = setTimeout(startClock, 500);
}
function checkClock(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
const reactImg = React.createElement('img', null, 'https://cdn.auth0.com/blog/react-js/react.png')
ReactDOM.render(reactImg, document.getElementById('reactImg'));