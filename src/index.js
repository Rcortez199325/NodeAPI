const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  return res.send("Hola desde Node js");
});

app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto: ${PORT}...`);
});
