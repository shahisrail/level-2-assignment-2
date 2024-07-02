import { Request, Response } from 'express';
import { orderService } from './order.service';
import orderValidatoinSchema from './order.validatoi';
import { TOrder } from './order.interface';


const createOrders = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        // console.log(data);
        const odersvalid  = orderValidatoinSchema.parse(data)
        console.log(odersvalid);
        const result = await orderService.createOrder(odersvalid as TOrder);
        console.log("result",result);
        res.json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            err
        });
    }
};
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query

      const result = await orderService.getAllOrderDb(email);
  
      if (email) {
        if (!result) {
          return res.status(500).json({
            success: false,
            message: 'Order not found',
          })
        } else {
          if (result.length === 0) {
            return res.json({
              success: false,
              message: 'no order found for this user email!',
              data: result,
            })
          }
          return res.json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: result,
          })
        }
      }
  

  
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error
      });
    }
  };
  
export const orderController = {
    createOrders,
    getAllOrders
}