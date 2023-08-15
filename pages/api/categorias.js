// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany();

  //Este console.log solo se ve en el lado del servidor
  console.log(categorias);

  //respondemos al cliente con las categorias
  res.status(200).json(categorias)
}
