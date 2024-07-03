"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schemas for each part of your Mongoose schemas
const variantSchema = zod_1.z.object({
    type: zod_1.z.string({
        required_error: 'type is required',
        invalid_type_error: 'type must be a string',
    }),
    value: zod_1.z.string({
        required_error: 'Value is required',
        invalid_type_error: 'Value must be a string',
    }),
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, 'quantity is required'),
    inStock: zod_1.z.boolean().optional(),
});
const productValidatoinSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    })
        .optional(),
    description: zod_1.z
        .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
    })
        .optional(),
    price: zod_1.z
        .number({
        required_error: 'Price is required',
        invalid_type_error: 'price must be a number',
    })
        .positive('Price must be positive.')
        .optional(),
    category: zod_1.z
        .string({
        required_error: 'Category is required',
        invalid_type_error: 'Category must be a string',
    })
        .optional(),
    tags: zod_1.z.array(zod_1.z.string().min(1)).min(1, 'Tags are required.').optional(),
    variants: zod_1.z.array(variantSchema).optional(),
    inventory: inventorySchema,
});
exports.default = productValidatoinSchema;
