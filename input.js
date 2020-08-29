const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Take url and period input from user
exports.urlInput = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter url to ping:\n', (input) => resolve(input));
  });
};

exports.intervalInput = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter interval (default 3000ms):\n', (input) => resolve(input));
  });
};

exports.protocolInput = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter protocol (http/https) (default http):\n', (input) =>
      resolve(input)
    );
  });
};
