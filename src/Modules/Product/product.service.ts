import { TProduct } from './Product.interface';
import { Product } from './Product.model';
// Ensure text index creation on Product collection
const ensureTextIndex = async () => {
    try {
        await Product.collection.createIndex(
            { name: 'text', description: 'text' },
            { background: true },
        );
    } catch (error) {
        // console.error('Error creating text index:', error)
    }
};

const createProductIntroDB = async (TProduct: TProduct) => {
    const res = await Product.create(TProduct);
    return res;
};

const getAllProductsDb = async (searchTerm: unknown) => {
    await ensureTextIndex();
    if (typeof searchTerm === 'string') {
        const res = Product.find({ $text: { $search: searchTerm } });
        return res;
    }
    const res = Product.find();
    return res;
};
const getSingaleProductsDb = async (id: string) => {
    const res = await Product.findById(id);
    return res;
};

const updateProduct = async (id: string, updatedProduct: TProduct) => {
    const result = await Product.findByIdAndUpdate(
        id,
        {
            $set: { ...updatedProduct },
        },
        { new: true },
    );

    if (result) {
        return { product: result, updated: true };
    } else {
        return { updated: false };
    }
};

const deleteProduct = async (id: string) => {
    const res = await Product.findByIdAndDelete(id);
    return res;
};
export const productServices = {
    createProductIntroDB,
    getAllProductsDb,
    getSingaleProductsDb,
    deleteProduct,
    updateProduct,
};
