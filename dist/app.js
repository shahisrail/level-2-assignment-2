"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./Modules/Product/product.route");
const order_rourte_1 = require("./Modules/Order/order.rourte");
const app = (0, express_1.default)();
// const port = 3000;
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use('/api/products', product_route_1.ProductRoutes);
app.use('/api/orders', order_rourte_1.orderRouter);
app.get('/', (req, res) => {
    res.send('E-commerce server is available');
});
app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
    next();
});
// console.log(process.cwd());
exports.default = app;
