## Quiosco-app

Proyecto full stack

- Next.js [Documentación](https://nextjs.org/)
- Tailwindcss [Documentación](https://tailwindui.com/)
- Prisma como ORM para la base de datos mysql [Documentación](https://www.prisma.io/)
- SWR para el comportamiento en tiempo real [Documentación](https://swr.vercel.app/es-ES)

## Instalar Prisma

```bash
npm i -D prisma
# Luego
npm i @prisma/client
# Luego
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
