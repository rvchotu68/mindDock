import "dotenv/config";
import express from "express";
import type { Application, Response } from "express";

import { toNodeHandler } from "better-auth/node";

// user imports

import env from "./config/env.js";
import { auth } from "./lib/auth.js";

const app: Application = express();
const PORT = env.PORT;

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

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
