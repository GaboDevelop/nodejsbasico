//ejecutar npm i
const cp = require("child_process");

function execCommand(command) {
  cp.exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    if (stdout) console.log(`standar out:\n${stdout} `);
    if (stderr) console.log(`standar err:\n${stderr} `);
  });
}

//execCommand("ls");

execCommand("node ./src/script --base=5");
