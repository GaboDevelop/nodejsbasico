const fs = require("fs");
const ops = require("./src/fileops");

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, list) => {
      if (err) reject(err);

      resolve(list.split("\n"));
    });
  });
};

const writeFile = (path, value) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, value, (err, list) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};

const main = function() {
  readFile("./resources/number.txt")
    .then(async res => {
      const newNumbers = ops.incrementValues(res.map(n => Number(n)));
      const save = await writeFile("./resources/numbernew.txt", newNumbers);
      console.log(save);
    })
    .catch(err => console.log(err));
};

main();
