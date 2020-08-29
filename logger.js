const fs = require('fs');

exports.log = (text) => {
  fs.appendFile('logs.txt', text, (err) => {
    if (err) console.log(err);
  });
};
