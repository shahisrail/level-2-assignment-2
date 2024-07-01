
import { TProduct } from './Product.interface';
import { Product } from './Product.model';

const createProductIntroDB = async (TProduct: TProduct) => {
    const res = await Product.create(TProduct);
    return res;
};

const getAllProductsDb = async () => {
    const res = await Product.find();
    return res;
};
const getSingaleProductsDb = async (id: string) => {
    const res = await Product.findById(id)
    return res;
}
export const productServices = {
    createProductIntroDB,
    getAllProductsDb,
    getSingaleProductsDb,
};
