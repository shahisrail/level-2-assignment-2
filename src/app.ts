import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './Modules/Product/product.route';
import { orderRouter } from './Modules/Order/order.rourte';
const app: Application = express();
// const port = 3000;

// parser

app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('E-commerce server is available');
});

app.all('*', (req, res, next) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
    })
    next()
  })
  

// console.log(process.cwd());
export default app;
