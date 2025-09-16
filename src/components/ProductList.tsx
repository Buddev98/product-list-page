import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import { Product } from '../types/product';

interface ProductListProps {
  products: Product[];
  categories: string[];
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';

const ProductList: React.FC<ProductListProps> = ({ products, categories }) => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('');
  const maxPrice = Math.max(...products.map(p => p.price));
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) return false;
      
      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      // Featured filter
      if (showFeaturedOnly && !product.featured) return false;
      
      // Discounted filter
      if (showDiscountedOnly && !product.discount) return false;
      
      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id; // Using ID as a proxy for newness
        case 'featured':
        default:
          // Featured products first, then by rating
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
      }
    });
  }, [products, selectedCategory, priceRange, showFeaturedOnly, showDiscountedOnly, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar for filters - hidden on mobile */}
        <div className="hidden lg:block lg:w-1/4">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            maxPrice={maxPrice}
            showFeaturedOnly={showFeaturedOnly}
            setShowFeaturedOnly={setShowFeaturedOnly}
            showDiscountedOnly={showDiscountedOnly}
            setShowDiscountedOnly={setShowDiscountedOnly}
            isMobileFilterOpen={isMobileFilterOpen}
            setIsMobileFilterOpen={setIsMobileFilterOpen}
          />
        </div>

        {/* Main content */}
        <div className="lg:w-3/4">
          {/* Top bar with sort and filter buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <h2 className="text-2xl font-bold text-gray-900">
              Products
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({filteredProducts.length} items)
              </span>
            </h2>
            
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              {/* Mobile filter button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </button>
              
              {/* Sort dropdown */}
              <div className="relative inline-block text-left w-full sm:w-auto">
                <div className="group">
                  <button className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>
                      Sort by: {' '}
                      {sortBy === 'featured' && 'Featured'}
                      {sortBy === 'price-low' && 'Price: Low to High'}
                      {sortBy === 'price-high' && 'Price: High to Low'}
                      {sortBy === 'rating' && 'Highest Rated'}
                      {sortBy === 'newest' && 'Newest'}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </button>
                  
                  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                    <div className="py-1">
                      <button
                        onClick={() => setSortBy('featured')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'featured' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
                      >
                        Featured
                      </button>
                      <button
                        onClick={() => setSortBy('price-low')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'price-low' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => setSortBy('price-high')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'price-high' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => setSortBy('rating')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'rating' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
                      >
                        Highest Rated
                      </button>
                      <button
                        onClick={() => setSortBy('newest')}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'newest' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
                      >
                        Newest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active filters */}
          {(selectedCategory || priceRange[0] > 0 || priceRange[1] < maxPrice || showFeaturedOnly || showDiscountedOnly) && (
            <div className="bg-gray-50 px-4 py-3 mb-6 rounded-md">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-700">Active filters:</span>
                
                {selectedCategory && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Category: {selectedCategory}
                    <button 
                      onClick={() => setSelectedCategory('')}
                      className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                    >
                      &times;
                    </button>
                  </span>
                )}
                
                {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Price: ${priceRange[0]} - ${priceRange[1]}
                    <button 
                      onClick={() => setPriceRange([0, maxPrice])}
                      className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                    >
                      &times;
                    </button>
                  </span>
                )}
                
                {showFeaturedOnly && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Featured Only
                    <button 
                      onClick={() => setShowFeaturedOnly(false)}
                      className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                    >
                      &times;
                    </button>
                  </span>
                )}
                
                {showDiscountedOnly && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    On Sale Only
                    <button 
                      onClick={() => setShowDiscountedOnly(false)}
                      className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                    >
                      &times;
                    </button>
                  </span>
                )}
                
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setPriceRange([0, maxPrice]);
                    setShowFeaturedOnly(false);
                    setShowDiscountedOnly(false);
                  }}
                  className="text-sm text-indigo-600 hover:text-indigo-800 ml-auto"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sidebar */}
      {isMobileFilterOpen && (
        <div className="lg:hidden">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            maxPrice={maxPrice}
            showFeaturedOnly={showFeaturedOnly}
            setShowFeaturedOnly={setShowFeaturedOnly}
            showDiscountedOnly={showDiscountedOnly}
            setShowDiscountedOnly={setShowDiscountedOnly}
            isMobileFilterOpen={isMobileFilterOpen}
            setIsMobileFilterOpen={setIsMobileFilterOpen}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
