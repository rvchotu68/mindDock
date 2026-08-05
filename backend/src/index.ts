import "dotenv/config";
import express from "express";
import type { Application, Response } from "express";

// user imports

import env from "./config/env.js";

const app: Application = express();

app.use(express.json());

const PORT = env.PORT;

app.use("/", (_, res) => {
  res.send("Server working...");
});

app.use("/health", (_, res: Response) => {
  res.json({
    status: "OK",
  });
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
