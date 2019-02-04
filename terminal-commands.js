const fs = require('fs');

module.exports.ls  = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = () => {
  console.log("Creating a new file");
  fs.writefile('message.txt', '', (err) => {
    if (err) throw err;
    console.log(success);
  });
};


module.exports.mkdir = () => {
  //code
  console.log("Creating a new directory");
  fs.mkdir('./', (err) => {
    if (err) throw err;
    console.log(scucess);
  });
};
