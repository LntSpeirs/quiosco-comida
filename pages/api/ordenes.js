// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //OBTENER ORDENES---------------------------------------------------------------------------
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  });
  //console.log(ordenes);
  res.status(200).json(ordenes);

  //------------------------------------------------------------------------------------------

  //CREAR ORDENES-----------------------------------------------------------------------------

  if (req.method === "POST") {
    //Este apartado solo se ve en el lado del servidor
    //console.log(req.body)

    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha,
      },
    });

    res.status(200).json(orden);
  } /* else {
    res.status(405).json("Método no aceptado en este endpoint.");
  } */
  //------------------------------------------------------------------------------------------
}
