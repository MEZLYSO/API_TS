import express from "express"; // ESModules
import route from "./routes/diaries";
const app = express();
const PORT = 3000;

app.use(express.json()); //middleware que transforma la req.body a json

app.get("/api", (_req, res) => {
  console.log("=> " + new Date().toLocaleDateString());
  res.send({ message: "Hola mundo usuario" });
});

app.use("/api/route", route);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
