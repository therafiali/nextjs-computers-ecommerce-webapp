"use client"

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { sanityClient } from '@/lib/sanity'


interface SearchResult {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  category: {
    name: string;
  };
}

export function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchProducts = async (query: string) => {
    if (query.trim() === '') {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    try {
      const response = await sanityClient.fetch(`*[_type == "product" && name match "*${query}*"] {
        _id,
        name,
        slug,
        price,
        category->{
          name
        }
      }`)
      setSearchResults(response)
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  // Handle search input
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    searchProducts(value)
  }

  return (
    <div className="relative flex-1 max-w-md w-full mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInput}
          className="w-full pl-10 text-black dark:text-white pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Show loading state */}
      {isSearching && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
          Searching...
        </div>
      )}

      {/* Search Results Dropdown */}
      {!isSearching && searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
          {searchResults.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product._id}`}
              className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => {
                setSearchQuery('')
                setSearchResults([])
              }}
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.category?.name} - ₨{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 