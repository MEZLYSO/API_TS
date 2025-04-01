import express from "express";
import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", async (_req, res) => {
  res.json({ message: "Hola" });
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Express Server is run on PORT " + PORT);
});
