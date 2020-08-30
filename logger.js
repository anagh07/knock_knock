const fs = require('fs');

exports.log = (text, filename = 'logs.txt') => {
  fs.appendFile(filename, text, (err) => {
    if (err) console.log(err);
  });
};
