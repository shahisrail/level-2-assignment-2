import express from 'express'
import { orderController } from './order.controller'


const router = express.Router()

router.post('/orders', orderController.createOrders)
router.get('/orders', orderController.getAllOrders)


export const orderRouter = router