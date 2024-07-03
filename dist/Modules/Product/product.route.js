"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//  Called the controller
router.post('/', product_controller_1.productControllers.createProduct);
router.get('/', product_controller_1.productControllers.getAllProducts);
router.get('/:productId', product_controller_1.productControllers.getSingaleProducts);
router.put('/:productId', product_controller_1.productControllers.updateProduct);
router.delete('/:productId', product_controller_1.productControllers.deleteProduct);
exports.ProductRoutes = router;
