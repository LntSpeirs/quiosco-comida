import Layout from "../layout/Layout";
import { PrismaClient } from "@prisma/client";

export default function Home() {
  return (
    <Layout>
      <h1>Next js</h1>
    </Layout>
  );
}

//Consultar base de datos en el lado del servidor de next
/* export const getServerSideProps = async () => {
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
 */
