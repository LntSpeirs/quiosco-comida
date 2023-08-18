## Quiosco-app

Proyecto full stack

- Next.js [Documentación](https://nextjs.org/)
- Tailwindcss [Documentación](https://tailwindui.com/)
- Prisma como ORM para la base de datos mysql [Documentación](https://www.prisma.io/)
- SWR para el comportamiento en tiempo real [Documentación](https://swr.vercel.app/es-ES)
- Consultas a base de datos MySQL desde el lado del servidor con getServerSideProps
- Consultas a base de datos MySQL desde el lado del servidor con la api de nextjs.
- useContext para manejar los datos desde la api: [Documentación](https://react.dev/reference/react/useContext)
- axios
- React - modal: npm install react-modal
- Heroicons: [Web](https://heroicons.com/)
- Notificaciones con react-toastify [github](https://fkhadra.github.io/react-toastify/introduction) [npm](https://www.npmjs.com/package/react-toastify)

[![Pagina principal](https://i.postimg.cc/3x8N1fbh/Index.png)](https://postimg.cc/SJPmNdh1)
[![Resumen.png](https://i.postimg.cc/ZK1jy3f6/Resumen.png)](https://postimg.cc/vct5J1wm)
[![Total.png](https://i.postimg.cc/Df11YD54/Total.png)](https://postimg.cc/jCdWDMpR)

En la ruta /admin veremos el panel con los pedidos en el lado de la cocina:
[![administracion.png](https://i.postimg.cc/MHKWN5fj/administracion.png)](https://postimg.cc/LYwKZzTH)

## Instalar Prisma

```bash
npm i -D prisma
```

- Luego instalamos el cliente prisma que se usa para comunicar con la base de datos con Prisma

```bash
npm i @prisma/client
```

- Luego inicializamos prisma

```bash
npx prisma init
```

## Crear y rellenar tablas en la base de datos con Prisma

- Despues de modificar los modelos en el schema.prisma con las tablas y campos que necesitamos:

```bash
npx prisma migrate dev
```

- Si tenemos datos de prueba y queremos eliminarlos:

```bash
npx prisma migrate reset
```

- Para ver los modelos en el navegador:

```bash
npx prisma studio
```

- Para hacer seed con los datos de prueba a la base de datos instalamos ts-node:

```bash
npm i ts-node
```

- Para ejecutar el archivo seed.ts con el comando personalizado que creamos en package.json:

```bash
npx prisma db seed
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
