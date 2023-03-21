import express from "express";
import apiRouter from "./routes/api.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
