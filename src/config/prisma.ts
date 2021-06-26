import { PrismaClient } from '@prisma/client';

import { env } from '/src/config/globals';

let prisma: PrismaClient;

// In development we attach the prisma client to global
// to avoid creating new connections on every code reload.
if (env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}

export { prisma };
