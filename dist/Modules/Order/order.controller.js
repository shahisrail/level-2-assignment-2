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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_validatoi_1 = __importDefault(require("./order.validatoi"));
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // console.log(data);
        const odersvalid = order_validatoi_1.default.parse(data);
        // console.log(odersvalid);
        const result = yield order_service_1.orderService.createOrder(odersvalid);
        // console.log('result', result);
        res.json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something Went Wrong',
            error: error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield order_service_1.orderService.getAllOrderDb(email);
        if (email) {
            if (!result) {
                return res.status(500).json({
                    success: false,
                    message: 'Order not found',
                });
            }
            else {
                if (result.length === 0) {
                    return res.json({
                        success: false,
                        message: 'no order found for this user email!',
                        data: result,
                    });
                }
                return res.json({
                    success: true,
                    message: 'Orders fetched successfully for user email!',
                    data: result,
                });
            }
        }
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
});
exports.orderController = {
    createOrders,
    getAllOrders,
};
