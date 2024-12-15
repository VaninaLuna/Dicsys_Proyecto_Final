import express from 'express';
import pool from './../../config.js';

const router = express.Router();

//listar categorias
router.get('/', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categorias');
        res.send(result);
    } catch (error) {
        console.log('Error al listar categorias', error);
        res.status(404).send('Error al conectar con la base de datos');
    }
})


//crear categoria
// router.post('/', async (req, res) => {
//     try {
//         const { data } = req.body;
//         const result = await pool.query('INSERT INTO categorias (nombre) VALUES (?)', [data]);

//         res.json({
//             data: data
//         })
//     } catch (error) {
//         console.log('Error al crear categoria', error);
//         res.status(404).send('Error al conectar con la base de datos');
//     }
// })

router.post('/', async (req, res) => {
    try {
        const { nombre } = req.body;

        const { result } = await pool.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre]);

        res.json({
            message: 'Categoría creada con éxito',
            data: { nombre }
        });
    } catch (error) {
        console.log('Error al crear categoría', error);
        res.status(500).send('Error al conectar con la base de datos');
    }
});


//crear una categoria
// router.post("/", async (req, res) => {
//     //http://localhost:4000/api/categorias
//     try {
//         const data = req.body;

//         const query = "INSERT INTO categorias SET ?";
//         const resutl = await pool.query(query, [data]);

//         res.json({
//             mensaje: "Categoria creada con exito",
//             data: data,
//         });
//     } catch (error) {
//         console.log("Error al insertar un datos : ${ error }");
//         res.sendStatus(500).send("Error al insertar datos");
//     }
// });

//actualizar categoria
router.patch('/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const { nombre } = req.body;

        const query = "UPDATE categorias SET nombre = ? WHERE id = ?";
        const [result] = await pool.query(query, [nombre, id]);

        res.json({
            message: 'Categoría actualizada con éxito',
            data: { id, nombre }
        });
    } catch (error) {
        console.log('Error al crear categoría', error);
        res.status(500).send('Error al conectar con la base de datos');
    }
})

//actualizar una categoria
router.patch("/:id", async (req, res) => {
    //http://localhost:4000/api/categorias/1
    try {
        const { id } = req.params;
        const { nombre } = req.body;

        const [result] = await pool.query(
            'UPDATE categorias SET nombre = ? WHERE id = ?',
            [nombre, id]
        );
        res.json({
            message: "Categoria actualizada con exito",
            data: {
                id: id,
                nombre: nombre,
            },
        });
    } catch (error) {
        console.log("Error al actualizar datos: ${ error }");
        res.sendStatus(500).send("Error al actualizar datos");
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