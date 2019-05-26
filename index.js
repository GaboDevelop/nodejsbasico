const errors = require("./src/errors");
const handle = require("./src/handling");

/*try {
  errors.standardErr.range();
} catch (err) {
  console.log(`Ha ocurrido un error ${err}`);
}*/

handle.errorFirstCallbackWrong();
