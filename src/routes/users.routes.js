import { Router } from "express";
import fs from "fs/promises";

const router = Router();
const path = "./src/repo/data.json";
//Aqui se agregan las peticiones
router.get("/users", async (req, res) => {
  const fileData = await fs.readFile(path, "utf-8");
  const response = JSON.parse(fileData);
  if (!response) {
    return res.status(404).send("No hay datos de usuarios");
  }
  res.json(response);
});
export default router;
