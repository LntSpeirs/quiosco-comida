export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Actualizando registro en la base de datos");
  } else {
    res.status(405).json("Metodo no admitido en este endpoint");
  }
}
