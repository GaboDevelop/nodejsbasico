const call = require("./src/call");

//call.greet("Gabriel");
async function callWithPromise() {
  const fullname = await call.withPromise("Gabriel", "Ricelis");
  console.log(fullname);
}

callWithPromise();
