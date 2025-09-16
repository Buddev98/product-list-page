import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, price, image, rating, stock, featured, discount } = product;
  
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-500">
            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              {discount ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
              )}
            </div>
          </div>
          
          <button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
