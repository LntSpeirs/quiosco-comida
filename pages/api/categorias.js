// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  //const categorias = await prisma.categoria.findMany();

  //Traeme las categorias junto con los productos que contienen
  const categoriasConProductos = await prisma.categoria.findMany({
    include:{
      productos:true
    }
  })


  //Este console.log solo se ve en el lado del servidor
/*   console.log(categorias); */

  //respondemos al cliente con las categorias
  res.status(200).json(categoriasConProductos)
  await prisma.$disconnect()
}
