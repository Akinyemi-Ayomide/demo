import { create } from 'zustand';
import {products} from '../assets/assets'
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

interface ProductStore {
  products: Product[];
  currencySymbol: string;
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  setCurrencySymbol: (symbol: string) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: products,
  currencySymbol: '₦',
  setProducts: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) => 
    set((state) => ({
      products: state.products.filter((p) => p._id !== String(id)),
    })),
  setCurrencySymbol: (symbol) => set({ currencySymbol: symbol }),
}));

export default useProductStore;
