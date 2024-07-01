import express from "express"
import { productControllers } from "./product.controller"


const router = express.Router()


//  Called the controller 
router.post("/products",productControllers.createProduct)
router.get("/products",productControllers.getAllProducts)
router.get("/products/:productId",productControllers.getSingaleProducts)

export const ProductRoutes = router
