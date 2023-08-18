// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //OBTENER ORDENES---------------------------------------------------------------------------
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: true,
    },
  });

  //console.log(ordenes);
  res.status(200).json(ordenes);
  await prisma.$disconnect()
}