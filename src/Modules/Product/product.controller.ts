import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidatoinSchema from './product.validatoin';
import { TProduct } from './Product.interface';

const createProduct = async (req: Request, res: Response) => {
    try {
        //   validatoin use zod
        const data = req.body;
        const product = productValidatoinSchema.parse(data);
        const result = await productServices.createProductIntroDB(
            product as TProduct,
        );
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create product!',
            error,
        });
    }
};
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await productServices.getAllProductsDb(searchTerm);
        if (searchTerm) {
            if (!result) {
                return res.status(500).json({
                    success: false,
                    message: 'Product not found',
                });
            } else {
                if (result.length === 0) {
                    return res.json({
                        success: false,
                        message: 'no product found for this SearchTerm!',
                        data: result,
                    });
                }
                return res.json({
                    success: true,
                    message:
                        'Products matching search term  fetched successfully!',
                    data: result,
                });
            }
        }

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed Products fetched !',
            error,
        });
    }
};
const getSingaleProducts = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.getSingaleProductsDb(productId);
        if (!result) {
            return res.status(400).json({
                success: false,
                message: 'Product not found',
                data: result,
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Singale Products Failed to fetched !',
            error,
        });
    }
};
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const data = req.body;
        const updatedProducts = productValidatoinSchema.parse(data);

        const result = await productServices.updateProduct(
            productId,
            updatedProducts as TProduct,
        );
        res.json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            err,
        });
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        await productServices.deleteProduct(productId);
        res.json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            err,
        });
    }
};

export const productControllers = {
    createProduct,
    getAllProducts,
    getSingaleProducts,
    updateProduct,
    deleteProduct,
};
