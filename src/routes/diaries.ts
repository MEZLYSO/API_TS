import express from "express";
const route = express.Router();

route.get("/", (_req, res) => {
  res.send({ message: "Obteniendo valores 1" });
});

route.post("/", (_req, res) => {
  res.send({ message: "Guardando cambios" });
});

export default route;
