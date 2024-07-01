import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) =>{

  try {
    const Product = req.body 
  const result = await productServices.createProductIntroDB(Product)
  res.status(200).json({
    "success": true,
    "message": "Product created successfully!",
    data:result,
  })
  } catch (error) {
    res.status(500).json({
      "success": false,
      "message": "Failed to create product!",
      error: error,
    })
  }
}
const getAllProducts = async (req:Request,res:Response)=>{
    try {
        const result = await productServices.getAllProductsDb()
        res.status(200).json({
            "success": true,
            "message": "Products fetched successfully!",
            data:result,
          })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Failed Products fetched !",
            error: error,
          })
    }
}
const getSingaleProducts = async (req:Request,res:Response)=>{
    try {

        const {productId} = req.params
        const result = await productServices.getSingaleProductsDb(productId)
        if (!result) {
            return res.status(400).json({
              success: false,
              message: 'Product not found',
              data: result,
            })
          }
        res.status(200).json({
            "success": true,
            "message": "Singale Products fetched successfully!",
            data:result,
          })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Singale Products Failed to fetched !",
            error: error,
          })
    }
}

export const  productControllers = {
    createProduct,
    getAllProducts,
    getSingaleProducts
}