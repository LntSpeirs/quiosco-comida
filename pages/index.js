import { PrismaClient } from "@prisma/client";

export default function Home({categorias}) {
  //este console.log se ve en el lado del cliente
  console.log(categorias)
  return <h1>Next js</h1>;
}

//Consultar base de datos en el lado del servidor de next
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  //Este console.log solo se ve en el lado del servidor
  console.log(categorias);
  return {
    props: {
      categorias
    }
  }
};
