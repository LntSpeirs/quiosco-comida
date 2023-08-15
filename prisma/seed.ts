import { categorias } from "./data/categorias";
import { productos } from "./data/productos";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    //https://www.prisma.io/docs/concepts/components/prisma-client/crud#create-multiple-records
    await prisma.categoria.createMany({
      data: categorias,
    });
    await prisma.producto.createMany({
      data: productos,
    });
  } catch (error) {
    console.log(error);
  }
};

main();
