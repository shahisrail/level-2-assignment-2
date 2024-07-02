import { z } from 'zod';

// Define the Zod schemas for each part of your Mongoose schemas
const variantSchema = z.object({
    type: z.string().min(1, 'type is required'),
    value: z.string().min(1, 'value is required'),
  });
  
  const inventorySchema = z.object({
    quantity: z.number().min(0, 'quantity is required'),
    inStock: z.boolean().default(true),
  });
  
  const productValidatoinSchema = z.object({
    name: z.string().min(1, 'name is required'),
    description: z.string().min(1, 'description is required'),
    price: z.number().min(0, 'price is required'),
    category: z.string().min(1, 'category is required'),
    tags: z.array(z.string().min(1)).nonempty('tags are required'),
    variants: z.array(variantSchema).nonempty('variants are required'),
    inventory: inventorySchema,
  });


  export default productValidatoinSchema