import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Grid, List, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

const AdvancedSearch: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [rating, setRating] = useState(0);
  const [results, setResults] = useState<Product[]>(products);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [...new Set(products.map(p => p.category))];

  useEffect(() => {
    let filtered = products.filter(p => 
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
       p.description.toLowerCase().includes(search.toLowerCase()) ||
       p.category.toLowerCase().includes(search.toLowerCase())) &&
      (!category || p.category === category) &&
      p.price >= priceMin && p.price <= priceMax &&
      p.rating >= rating
    );

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

    setResults(filtered);
  }, [search, category, priceMin, priceMax, rating, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setCategory('');
    setPriceMin(0);
    setPriceMax(10000);
    setRating(0);
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Product</span> Search
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our premium pharmaceutical products manufactured with precision
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search Groma Pharma products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </button>
              
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden shadow-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-4 transition-all duration-200 ${viewMode === 'grid' ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-4 transition-all duration-200 ${viewMode === 'list' ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceMin}
                      onChange={(e) => setPriceMin(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceMax}
                      onChange={(e) => setPriceMax(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Minimum Rating
                  </label>
                  <div className="flex items-center gap-1 p-2">
                    {[1,2,3,4,5].map(r => (
                      <Star
                        key={r}
                        className={`w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110 ${r <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600 hover:text-yellow-300'}`}
                        onClick={() => setRating(r === rating ? 0 : r)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {results.length} products found
                </span>
                <button
                  onClick={resetFilters}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors px-3 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
          {results.map(product => (
            <div
              key={product.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                  viewMode === 'list' ? 'w-48 h-32' : 'w-full h-56'
                }`}
              />
              
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  {product.prescription && (
                    <span className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Rx Only
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300 dark:text-gray-600'
                        }
                      />
                    ))}
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                      {product.category}
                    </div>
                  </div>
                  
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {results.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <Filter size={64} className="mx-auto mb-6 text-gray-300 dark:text-gray-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={resetFilters}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearch;