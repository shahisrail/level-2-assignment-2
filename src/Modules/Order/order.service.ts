
import { Types } from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Product } from "../Product/Product.model";


const createOrder = async (order: TOrder) => {
    // Find the product by ID and check the inventory quantity
  try {
    const findProduct = await Product.findOne({
        _id: new Types.ObjectId(order.productId),
        'inventory.quantity': { $gte: order.quantity },
      });
     console.log( "id",findProduct);
     if (!findProduct) {
        throw new Error('Insufficient quantity available in inventory');
      }
      findProduct.inventory.quantity -= order.quantity;
      if (findProduct.inventory.quantity > 0) {
        findProduct.inventory.inStock = true;
    } else {
        findProduct.inventory.inStock = true;
    }
      await findProduct.save();
  
      const result = await Order.create(order);
      return result;
      
  } catch (error) {
   console.log(error);
  }
    // Update the product inventory
   
    // Create the order
   
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