//crear bd id, nombre y fecha vencimiento
//pasar esto al .env
// const pool = createPool({
//     host: 'localhost',
//     port: 3307,
//     user: 'root',
//     database: 'dicsys'

// })
//listar de categorias
//listar de productos

import express from 'express';
import pool from './../../config.js';

const router = express.Router();

//listar productos

router.get('/', async (req, res) => {
    //http://localhost:4000/api/productos
    try {
        const [result] = await pool.query('SELECT * FROM productos');
        res.send(result);
    } catch (error) {
        console.log('Error al listar productos', error);
        res.status(404).send('Error al conectar con la base de datos');
    }
});

//listar productos por categoria
// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const [result] = await pool.query(
//             'SELECT * FROM productos WHERE id_categoria =?',
//             [id]
//         );
//         res.send(result);
//     } catch (error) {
//         console.log('Error al listar productos por categoria', error);
//         res.status(404).send('Error al conectar con la base de datos');
//     }
// });

//listar productos por categoria fecha formateada
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query(
            'SELECT * FROM productos WHERE id_categoria = ?',
            [id]
        );

        // Formatear la fecha de cada producto
        const productosFormateados = result.map((producto) => {
            if (producto.fecha_vencimiento) {
                producto.fecha_vencimiento = new Date(producto.fecha_vencimiento).toISOString().split('T')[0];
            }
            return producto;
        });

        res.send(productosFormateados);
    } catch (error) {
        console.log('Error al listar productos por categoria', error);
        res.status(404).send('Error al conectar con la base de datos');
    }
});


//agregar producto
router.post('/', async (req, res) => {
    const { nombre, fecha_vencimiento, precio, stock, url_img, id_categoria } = req.body;

    // Validar campos requeridos
    if (!nombre || !fecha_vencimiento || !precio || !stock || !url_img || !id_categoria) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        // Usar placeholders para evitar inyección SQL
        const query = `
            INSERT INTO productos (nombre, fecha_vencimiento, precio, stock, url_img, id_categoria)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [nombre, fecha_vencimiento, precio, stock, url_img, id_categoria];
        const [result] = await pool.query(query, values);

        res.status(201).json({
            message: 'Producto agregado correctamente',
            data: { id: result.insertId, ...req.body }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al conectar con la base de datos' });
    }
});



router.patch('/:id', async (req, res) => {
    const { id } = req.params;  // Obtener el ID del producto
    const { nombre, fecha_vencimiento, id_categoria, stock, precio, url_img } = req.body; // Obtener nuevos datos

    try {
        // Crear la consulta de actualización
        const result = await pool.query(
            'UPDATE productos SET nombre = ?, fecha_vencimiento = ?, id_categoria = ?, stock = ?, precio = ?, url_img = ? WHERE id = ?',
            [nombre, fecha_vencimiento, id_categoria, stock, precio, url_img, id]
        );

        // Verificar si se actualizó algún producto
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }

        res.json({
            message: 'Producto actualizado con éxito',
            data: { id, nombre, fecha_vencimiento, id_categoria, stock, precio, url_img }
        });

    } catch (error) {
        console.log('Error al actualizar el producto', error);
        res.status(500).json({ message: 'Error al conectar con la base de datos' });
    }
});


//eliminar producto 

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM productos WHERE id =?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }
        res.json({
            message: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(500).send('Error al conectar con la base de datos');
    }
});

export default router;