import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    //console.log("Actualizando registro en la base de datos");
    //console.log(req.query)
    const { id } = req.query;
    const ordenActualizada = await prisma.orden.update({
      where: {
        id: parseInt(id),
      },
      data: {
        estado: true,
      },
    });
    res.status(200).json(ordenActualizada);
    await prisma.$disconnect()
  } else {
    res.status(405).json("Metodo no admitido en este endpoint");
  }
}
