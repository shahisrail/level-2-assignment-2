import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './Modules/Product/product.route';
const app: Application = express();
// const port = 3000;

// parser

app.use(express.json());
app.use(cors());

// routes
app.use('/api', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('E-commerce server is available');
});

// console.log(process.cwd());
export default app;
