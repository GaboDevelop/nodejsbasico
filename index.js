const express = require("express");
const app = express();
const { PORT } = require("./config");

//es importante que /api sea primero que route
require("./routes/api")(app);
require("./routes/views")(app);


function init(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log("El servidor Express esta activo.");
    });
}

init();