"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema for the order
const orderValidatoinSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format').optional(),
    productId: zod_1.z.string().optional(),
    price: zod_1.z
        .number({
        invalid_type_error: 'Price must be a number',
    })
        .positive({ message: 'Price must be a positive number' })
        .optional(),
    quantity: zod_1.z
        .number()
        .positive({ message: 'Quantity must be a positive number' })
        .optional(),
});
// Validate an order using the orderSchema
exports.default = orderValidatoinSchema;
