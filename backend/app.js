require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productosRouter = require("./routes/productos");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta básica para probar el servidor
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.use("/api/productos", productosRouter);



// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
