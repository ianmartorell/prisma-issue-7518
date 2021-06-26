import { prisma } from './config/prisma';

(async function main() {
  try {
    prisma.orderItem.create({
      data: {
        productUpdate: {
          create: {
            product: {
              create: {},
            },
          },
        },
      },
      include: {
        productUpdate: {
          include: {
            product: {
              include: {
                latestUpdate: true,
              },
            },
          },
        },
      },
    });
  } catch (err) {
    console.error(err.stack);
  }
})();
