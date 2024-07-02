import express from 'express'
import { orderController } from './order.controller'


const router = express.Router()

router.post('/', orderController.createOrders)
router.get('/', orderController.getAllOrders)


export const orderRouter = router