/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

// Augment the global object type to include Prisma
declare global {
  // Explicitly declare the 'prisma' property on the global object
  var prisma: PrismaClient | undefined;
}

// Create a Prisma client or reuse the existing one
export const client = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Enable logging for Prisma queries in development
});

// Assign the client to the global object in non-production environments
if (process.env.NODE_ENV !== "production") {
  global.prisma = client;
}
