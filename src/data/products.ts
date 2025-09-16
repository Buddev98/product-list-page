import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Noise-cancelling wireless headphones with premium sound quality and 30-hour battery life.",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    stock: 25,
    featured: true
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    description: "Adjustable office chair with lumbar support and breathable mesh back.",
    price: 249.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    stock: 15
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description: "Track your workouts, heart rate, and sleep with this waterproof smart watch.",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    stock: 30,
    discount: 15
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    description: "Soft, sustainable t-shirt made from 100% organic cotton.",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    stock: 100
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    description: "High-resolution camera with multiple lenses and advanced features for professional photography.",
    price: 1299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    stock: 8,
    featured: true
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    description: "Vacuum-insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 50,
    discount: 10
  },
  {
    id: 7,
    name: "Leather Messenger Bag",
    description: "Handcrafted genuine leather bag with multiple compartments and adjustable strap.",
    price: 159.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    stock: 12
  },
  {
    id: 8,
    name: "Smart Home Security System",
    description: "Complete home security with cameras, motion sensors, and smartphone integration.",
    price: 399.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    stock: 10,
    featured: true
  },
  {
    id: 9,
    name: "Ceramic Plant Pot Set",
    description: "Set of 3 minimalist ceramic pots in different sizes for indoor plants.",
    price: 49.99,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    stock: 35
  },
  {
    id: 10,
    name: "Wireless Gaming Mouse",
    description: "Precision gaming mouse with customizable buttons and RGB lighting.",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 20,
    discount: 20
  },
  {
    id: 11,
    name: "Bamboo Cutting Board",
    description: "Sustainable bamboo cutting board with juice groove and handles.",
    price: 39.99,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    stock: 40
  },
  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with 360° sound and 20-hour battery life.",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    stock: 18,
    discount: 15
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));
