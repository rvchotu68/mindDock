import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import env from "../config/env.js";

// this is for typescript to tell that globalThis will have prisma variable whose value is either PrismaClient or undefined.

const globalThisPrimsa = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const pool = new Pool({
    database: env.DATABASE_URL,
  });

  const adapter = new PrismaPg(pool);

  return new PrismaClient({ adapter });
}

const prisma = globalThisPrimsa.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalThisPrimsa.prisma = prisma;

export default prisma;
