import { z } from 'zod';

// Define the Zod schema for the order
const orderValidatoinSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  productId: z.string().min(1, 'Product ID is required'),
  price: z.number().min(0, 'Price must be a non-negative number'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
});

// Validate an order using the orderSchema


export default orderValidatoinSchema
