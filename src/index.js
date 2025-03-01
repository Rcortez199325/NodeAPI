import express from "express";
import usersRoutes from "./routes/users.routes.js";
const app = express();
const PORT = 3001;
//Middlewares
app.use((req, res, next) => {
  console.log("este middleware esta ejecutandose antes del get");
  //Aqui agregariamos un middleware de autenticacion si es necesario
  next();
});
app.use(express.json());
app.use("/api", usersRoutes);
app.get("/api", (req, res) => {
  return res.send("Hola desde Node js");
});

app.listen(PORT, () => {
  console.log(`El servidor esta en el puerto: ${PORT}...`);
});
