import "dotenv/config";
import express from "express";

// user imports

import env from "./config/env.js";

const app = express();

const PORT = env.PORT;

app.use("/", (req, res) => {
  res.send("Server working...");
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
