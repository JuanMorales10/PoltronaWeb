const express = require("express");
const router = express.Router();
const { Producto } = require("../database/models"); // Importar el modelo desde index.js

// Ruta para obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const productos = await Producto.findAll(); // Usar Sequelize para obtener los datos
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

// Ruta para obtener un producto por su ID
router.get("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id); // Usar Sequelize para buscar por ID
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
    console.log(producto)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

// Ruta para crear un nuevo producto
router.post("/", async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body); // Crear un nuevo producto con Sequelize
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

// Ruta para actualizar un producto existente
router.put("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    await producto.update(req.body); // Actualizar los campos del producto
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

// Ruta para eliminar un producto
router.delete("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    await producto.destroy(); // Eliminar el producto
    res.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

module.exports = router;
