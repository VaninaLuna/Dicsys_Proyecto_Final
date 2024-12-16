import express from "express";
import clientes from "./modulos/categorias/ruta.js";
import proveedores from "./modulos/productos/ruta.js";
import cors from "cors";

const app = express();

app.use(
  cors()
  // { origin: 'https://localhost:4200'}
);

app.use(express.json());

//configura el puerto
app.set("port", 4000);

//ruta
app.use("/api/categorias", clientes);
app.use("/api/productos", proveedores);

export default app;
