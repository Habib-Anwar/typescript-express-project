import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (payload: Product) => {
  const result = await ProductModel.create(payload);
  return result;
};
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};
const getProductById = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
};
