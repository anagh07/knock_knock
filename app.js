const ping = require('./ping').ping;
const input = require('./input');

let url;
let interval;
let protocol;

console.log('Recurring pings to url every specified interval.');
console.log('Status code and time of response is logged.');

// Take user input
input
  .urlInput()
  .then((inputUrl) => {
    if (!inputUrl) return url;
    return (url = inputUrl);
  })
  .then(() => {
    return input.intervalInput();
  })
  .then((inputInterval) => {
    if (!inputInterval) return interval;
    return (interval = inputInterval);
  })
  .then(() => {
    return input.protocolInput();
  })
  .then((inputProtocol) => {
    if (!inputProtocol) return protocol;
    return (protocol = inputProtocol);
  })
  .then(() => {
    // Ping the url
    ping(protocol, url, interval);
  })
  .catch((err) => {
    console.log(err);
  });
