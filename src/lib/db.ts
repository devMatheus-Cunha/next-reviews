import { PrismaClient } from "@prisma/client";

declare global {
  var prismaClient: PrismaClient | undefined;
}

export const db = createPrismaClient();

function createPrismaClient(): PrismaClient {
  if (!globalThis.prismaClient) {
    globalThis.prismaClient = new PrismaClient({
      // log: [{ emit: 'stdout', level: 'query' }],
    });
  }
  return globalThis.prismaClient;
}
