"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const product_validatoin_1 = __importDefault(require("./product.validatoin"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   validatoin use zod
        const data = req.body;
        const product = product_validatoin_1.default.parse(data);
        const result = yield product_service_1.productServices.createProductIntroDB(product);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create product!',
            error,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.productServices.getAllProductsDb(searchTerm);
        if (searchTerm) {
            if (!result) {
                return res.status(500).json({
                    success: false,
                    message: 'Product not found',
                });
            }
            else {
                if (result.length === 0) {
                    return res.json({
                        success: false,
                        message: 'no product found for this SearchTerm!',
                        data: result,
                    });
                }
                return res.json({
                    success: true,
                    message: 'Products matching search term  fetched successfully!',
                    data: result,
                });
            }
        }
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed Products fetched !',
            error,
        });
    }
});
const getSingaleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getSingaleProductsDb(productId);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Singale Products Failed to fetched !',
            error,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = req.body;
        const updatedProducts = product_validatoin_1.default.parse(data);
        const result = yield product_service_1.productServices.updateProduct(productId, updatedProducts);
        res.json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.productServices.deleteProduct(productId);
        res.json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            err,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    getSingaleProducts,
    updateProduct,
    deleteProduct,
};
