import express from 'express';
import productsRouter from './routes/products.route';

const app = express();

app.use(express.json());

// Ruta para la raíz (esto evitará el "Cannot GET /")
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de productos!');
});

// Usar las rutas de productos
app.use('/api/products', productsRouter);

export default app;
