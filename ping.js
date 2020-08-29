const http = require('http');
const https = require('https');

const log = require('./logger').log;

exports.ping = async (
  protocol = 'http',
  url = 'http://localhost:3000/pingme/',
  interval = 3000
) => {
  console.log(`Pinging ${url} after every ${interval} ms...\n`);
  // Log to file
  log(`Pinging ${url} after every ${interval} ms...\n`);

  // Ping server
  setInterval(() => {
    if (protocol === 'http') {
      http.get(url, (res) => {
        let time = new Date();
        console.log(`${time.toISOString()}, Status Code: ${res.statusCode}`);
        log(`${time.toISOString()}, Status Code: ${res.statusCode}\n`);
      });
    } else {
      https.get(url, (res) => {
        let time = new Date();
        console.log(`${time.toISOString()}, Status Code: ${res.statusCode}`);
        log(`${time.toISOString()}, Status Code: ${res.statusCode}\n`);
      });
    }
  }, interval);
};
