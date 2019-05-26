const greet = require("./src/greet");

//greet.emit("clap");
//greet.emit("shout", "VIVA LO QUE SEA");
greet.emit("call", "Gabriel", name => {
  console.log(`estamos llamando a ${name}`);
});
