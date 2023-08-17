import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";
import React, { useCallback, useEffect } from "react";

const Total = () => {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  /*  const comprobarPedido = () => {
    return pedido.length === 0;
  }; */

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total y confirmar pedido">
      <h1 className="text-4xl font-black ms-5">Total y confirmar pedido</h1>
      <p className="text-2xl my-10 ms-5">Confirma tu pedido</p>

      <form onSubmit={colocarOrden} className="ms-5">
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar pedido"
            className={`w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white ${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            }  text-center`}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;
