import express from "express";
import pool from "./../../config.js";

const router = express.Router();

//listar categorias
router.get("/", async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM categorias");
    res.send(result);
  } catch (error) {
    console.log("Error al listar categorias", error);
    res.status(404).send("Error al conectar con la base de datos");
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre } = req.body;

    const { result } = await pool.query(
      "INSERT INTO categorias (nombre) VALUES (?)",
      [nombre]
    );

    res.json({
      message: "Categoría creada con éxito",
      data: { nombre },
    });
  } catch (error) {
    console.log("Error al crear categoría", error);
    res.status(500).send("Error al conectar con la base de datos");
  }
});

//actualizar categoria
router.patch("/:id", async (req, res) => {
  //http://localhost:4000/api/categorias/1
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const query = "UPDATE categorias SET nombre = ? WHERE id = ?";
    const [result] = await pool.query(query, [nombre, id]);

    res.json({
      message: "Categoría actualizada con éxito",
      data: { id, nombre },
    });
  } catch (error) {
    console.log("Error al crear categoría", error);
    res.status(500).send("Error al conectar con la base de datos");
  }
});

//eliminar categoria
router.delete("/:id", async (req, res) => {
  //http://localhost:4000/api/categorias/1
  try {
    const { id } = req.params;

    const query = "DELETE FROM categorias WHERE id = ?";

    await pool.query(query, [id]);

    res.json({
      message: "Categoria eliminada con exito",
      id: id,
    });
  } catch (error) {
    console.log("Error al eliminar datos: ${error}");
    res.sendStatus(500).send("Error al eliminar datos");
  }
});

export default router;
