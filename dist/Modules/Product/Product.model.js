"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: { type: String, required: [true, 'type is required'] },
    value: { type: String, required: [true, 'value is required'] },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: [true, 'quantity is required'] },
    inStock: { type: Boolean, required: true, default: true },
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: [true, 'description is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    category: { type: String, required: [true, 'category is required'] },
    tags: { type: [String], required: true },
    variants: [variantSchema],
    inventory: inventorySchema,
});
// Create a model
exports.Product = (0, mongoose_1.model)('product', productSchema);
