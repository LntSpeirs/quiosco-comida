## Quiosco-app

Proyecto full stack

- Next.js
- Tailwindcss
- Prisma como ORM para la base de datos mysql [Documentacion](https://www.prisma.io/)
- SWR para el comportamiento en tiempo real [Documentación](https://swr.vercel.app/es-ES)

## Instalar Prisma

npm i -D prisma
npm i @prisma/client
npx prisma init

- Despues de modificar los modelos en el schema.prisma: npx prisma migrate dev
- Si tenemos datos de prueba y queremos eliminarlos: npx prisma migrate reset
- Para ver los modelos en el navegador: npx prisma studio

- Para hacer seed con los datos de prueba a la base de datos instalamos ts-node: npm i ts-node para ejecutar el archivo seed.ts con el compando personalizado que creamos en package.json: npx prisma db seed

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
