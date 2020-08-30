const http = require('http');
const https = require('https');

const log = require('./logger').log;

exports.ping = async (
  protocol = 'http',
  url = 'http://localhost:3000/pingme/',
  interval = 3000
) => {
  // Generate filename from url
  let buffer = url.replace(/:\s*/g, '');
  buffer = buffer.replace(/\\|\//g, '');
  const filename = buffer + '.txt';
  console.log(`Pinging ${url} after every ${interval} ms...\n`);
  // Log to file
  log(`Pinging ${url} after every ${interval} ms...\n`, filename);

  // Ping server
  setInterval(() => {
    if (protocol === 'http') {
      http.get(url, (res) => {
        let time = new Date();
        console.log(
          `${time.toISOString()} :: ${url} :: Status Code: ${res.statusCode}`
        );
        log(
          `${time.toISOString()} :: ${url} :: Status Code: ${res.statusCode}\n`,
          filename
        );
      });
    } else {
      https.get(url, (res) => {
        let time = new Date();
        console.log(
          `${time.toISOString()} :: ${url} :: Status Code: ${res.statusCode}`
        );
        log(
          `${time.toISOString()} :: ${url} :: Status Code: ${res.statusCode}\n`,
          filename
        );
      });
    }
  }, interval);
};
