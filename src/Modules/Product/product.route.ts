import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

//  Called the controller
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getAllProducts);
router.get('/:productId', productControllers.getSingaleProducts);
router.put('/:productId', productControllers.updateProduct);
router.delete('/:productId', productControllers.deleteProduct);

export const ProductRoutes = router;
