const call = require("./src/call");

//console.log(call.sync("Gabriel"));

//call.withCallback("Gabriel", call.sync);

call.withPromise("Gabriel").then(name => console.log(name));
