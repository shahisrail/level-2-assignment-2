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
exports.orderService = void 0;
/* eslint-disable no-useless-catch */
const mongoose_1 = require("mongoose");
const order_model_1 = require("./order.model");
const Product_model_1 = require("../Product/Product.model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    // Find the product by ID and check the inventory quantity
    try {
        const findProduct = yield Product_model_1.Product.findOne({
            _id: new mongoose_1.Types.ObjectId(order.productId),
            'inventory.quantity': { $gte: order.quantity },
        });
        // console.log('id', findProduct);
        if (findProduct === null) {
            throw new Error('Insufficient quantity available in inventory');
        }
        findProduct.inventory.quantity -= order.quantity;
        if (findProduct.inventory.quantity > 0) {
            findProduct.inventory.inStock = true;
        }
        else {
            findProduct.inventory.inStock = true;
        }
        yield findProduct.save();
        const result = yield order_model_1.Order.create(order);
        return result;
    }
    catch (error) {
        throw error;
    }
    // Update the product inventory
    // Create the order
});
const getAllOrderDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof email === 'string') {
        const result = yield order_model_1.Order.find({ email });
        return result;
    }
    const res = order_model_1.Order.find();
    return res;
});
exports.orderService = {
    createOrder,
    getAllOrderDb,
};
