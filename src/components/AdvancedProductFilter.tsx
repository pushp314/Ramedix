import React, { useState, useEffect } from 'react';
import { Filter, Star } from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../types';

interface Props {
  onFilterChange?: (products: Product[]) => void;
}

const AdvancedProductFilter: React.FC<Props> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceMin: 0,
    priceMax: 1000,
    rating: 0,
    inStock: false
  });

  const categories = [...new Set(products.map(p => p.category))];

  useEffect(() => {
    const filtered = products.filter(p => 
      (!filters.category || p.category === filters.category) &&
      p.price >= filters.priceMin && p.price <= filters.priceMax &&
      p.rating >= filters.rating &&
      (!filters.inStock || p.inStock)
    );
    onFilterChange?.(filtered);
  }, [filters, onFilterChange]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
      >
        <Filter className="w-4 h-4 mr-2" />
        Filters
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-10 p-4">
          <div className="space-y-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="w-full p-2 border rounded"
            >
              <option value="">All Categories</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceMin}
                onChange={(e) => setFilters({...filters, priceMin: Number(e.target.value)})}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.priceMax}
                onChange={(e) => setFilters({...filters, priceMax: Number(e.target.value)})}
                className="flex-1 p-2 border rounded"
              />
            </div>

            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(r => (
                <Star
                  key={r}
                  className={`w-5 h-5 cursor-pointer ${r <= filters.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  onClick={() => setFilters({...filters, rating: r === filters.rating ? 0 : r})}
                />
              ))}
            </div>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
                className="mr-2"
              />
              In Stock Only
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedProductFilter;