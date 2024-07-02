import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './Product.interface';

const variantSchema = new Schema<TVariant>({
    type: { type: String, required: [true, 'type is required'] },
    value: { type: String, required: [true, 'value is required'] },
});

const inventorySchema = new Schema<TInventory>({
    quantity: { type: Number, required: [true, 'quantity is required'] },
    inStock: { type: Boolean, required: true, default: true },
});

const productSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    description: { type: String, required: [true, 'description is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    category: { type: String, required: [true, 'category is required'] },
    tags: { type: [String], required: true },
    variants: [variantSchema],
    inventory: inventorySchema,
});

// Create a model

export const Product = model<TProduct>('product', productSchema);
