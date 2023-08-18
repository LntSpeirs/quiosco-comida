import ModalProducto from "@/components/ModalProducto";
import Pasos from "@/components/Pasos";
import Sidebar from "@/components/Sidebar";
import useQuiosco from "@/hooks/useQuiosco";
import Head from "next/head";
/* import { PrismaClient } from "@prisma/client"; */
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const Layout = ({ children, pagina }) => {
  const { modal } = useQuiosco();
  return (
    <>
      <Head>
        <title>Café | {pagina}</title>
        <meta name="description" content="Quiosco/cafeteria" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="pt-10">
            <Pasos />
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;

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
