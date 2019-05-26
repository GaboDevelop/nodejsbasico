const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Estoy en la ruta HOME");
});

app.get("/app", (req, res) => {
  res.send("Estoy en la ruta /app");
});

app.get("*", (req, res) => {
  res.send("Estoy en la ruta 404");
});

app.listen(3000, () => {
  console.log("El servidor express esta en escucha en el puerto 3000...");
});
