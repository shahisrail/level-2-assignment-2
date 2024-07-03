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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const Product_model_1 = require("./Product.model");
// Ensure text index creation on Product collection
const ensureTextIndex = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Product_model_1.Product.collection.createIndex({ name: 'text', description: 'text' }, { background: true });
    }
    catch (error) {
        // console.error('Error creating text index:', error)
    }
});
const createProductIntroDB = (TProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Product_model_1.Product.create(TProduct);
    return res;
});
const getAllProductsDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureTextIndex();
    if (typeof searchTerm === 'string') {
        const res = Product_model_1.Product.find({ $text: { $search: searchTerm } });
        return res;
    }
    const res = Product_model_1.Product.find();
    return res;
});
const getSingaleProductsDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Product_model_1.Product.findById(id);
    return res;
});
const updateProduct = (id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.Product.findByIdAndUpdate(id, {
        $set: Object.assign({}, updatedProduct),
    }, { new: true });
    if (result) {
        return { product: result, updated: true };
    }
    else {
        return { updated: false };
    }
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Product_model_1.Product.findByIdAndDelete(id);
    return res;
});
exports.productServices = {
    createProductIntroDB,
    getAllProductsDb,
    getSingaleProductsDb,
    deleteProduct,
    updateProduct,
};
