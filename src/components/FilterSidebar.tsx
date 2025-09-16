import React from 'react';
import { Sliders, X } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  maxPrice: number;
  showFeaturedOnly: boolean;
  setShowFeaturedOnly: (show: boolean) => void;
  showDiscountedOnly: boolean;
  setShowDiscountedOnly: (show: boolean) => void;
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  maxPrice,
  showFeaturedOnly,
  setShowFeaturedOnly,
  showDiscountedOnly,
  setShowDiscountedOnly,
  isMobileFilterOpen,
  setIsMobileFilterOpen
}) => {
  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    
    // Ensure min <= max
    if (index === 0 && value > newRange[1]) {
      newRange[1] = value;
    } else if (index === 1 && value < newRange[0]) {
      newRange[0] = value;
    }
    
    setPriceRange(newRange);
  };

  const sidebarClasses = `
    bg-white p-5 rounded-lg shadow-md
    ${isMobileFilterOpen ? 'fixed inset-0 z-50 overflow-y-auto' : 'hidden'}
    lg:block lg:sticky lg:top-4 lg:h-auto lg:w-full lg:max-w-xs
  `;

  return (
    <div className={sidebarClasses}>
      <div className="flex items-center justify-between mb-6 lg:mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <Sliders className="w-5 h-5 mr-2" />
          Filters
        </h2>
        <button 
          className="lg:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-3">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="all-categories"
              name="category"
              checked={selectedCategory === ''}
              onChange={() => setSelectedCategory('')}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="all-categories" className="ml-2 text-sm text-gray-700">
              All Categories
            </label>
          </div>
          
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="radio"
                id={`category-${category}`}
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-3">Price Range</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="min-price" className="text-sm text-gray-600">Min Price</label>
              <span className="text-sm font-medium text-gray-900">${priceRange[0]}</span>
            </div>
            <input
              type="range"
              id="min-price"
              min={0}
              max={maxPrice}
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <label htmlFor="max-price" className="text-sm text-gray-600">Max Price</label>
              <span className="text-sm font-medium text-gray-900">${priceRange[1]}</span>
            </div>
            <input
              type="range"
              id="max-price"
              min={0}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Special Filters */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-3">Special Filters</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured-only"
              checked={showFeaturedOnly}
              onChange={(e) => setShowFeaturedOnly(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="featured-only" className="ml-2 text-sm text-gray-700">
              Featured Products Only
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="discounted-only"
              checked={showDiscountedOnly}
              onChange={(e) => setShowDiscountedOnly(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="discounted-only" className="ml-2 text-sm text-gray-700">
              On Sale Only
            </label>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setSelectedCategory('');
          setPriceRange([0, maxPrice]);
          setShowFeaturedOnly(false);
          setShowDiscountedOnly(false);
        }}
        className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
