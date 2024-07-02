
import { Types } from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Product } from "../Product/Product.model";



const createOrder = async (order: TOrder): Promise<TOrder | null> => {
    try {
      const findProduct = await Product.findOne({
        _id: new Types.ObjectId(order.productId),
        'inventory.quantity': { $gte: order.quantity },
      });
      if (!findProduct) {
        throw new Error('Insufficient quantity available in inventory');
      }

      findProduct.inventory.quantity -= order.quantity;
      findProduct.inventory.inStock = findProduct.inventory.quantity > 0;
  
      await findProduct.save();
  
      // Create the order
      const result = await Order.create(order);
      return result;
      
    } catch (error) {
      console.error('Error creating order:', error);
      return null; // or throw the error again based on your error handling strategy
    }
  };
  
const getAllOrderDb = async (email:unknown) => {
    if (typeof email === 'string') {
        const result = await Order.find({ email })
        return result
      }
    const res =  Order.find();
    return res;
};
export const orderService = {
    createOrder,
    getAllOrderDb
}



