// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const productos = await prisma.producto.findMany();

  /* const productosCategoria1 = await prisma.producto.findMany({
    where:{
      categoriaId : 1
      },
  }); */

  //Este console.log solo se ve en el lado del servidor
 /*  console.log(productos); */

  //respondemos al cliente con los productos
  res.status(200).json(productos)
}
