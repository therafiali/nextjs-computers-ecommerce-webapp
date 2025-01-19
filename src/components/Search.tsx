"use client"

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { getCategories, Product } from '@/data/categories'

export function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const allCategories = getCategories()
console.log("ds",allCategories)
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)

    if (query.trim() === '') {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    // Search through all products in all categories
    const results = allCategories.flatMap(category => 
      category.products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.model.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    )

    setSearchResults(results)
  }

  return (
    <div className="relative flex-1 max-w-md w-full mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 text-black dark:text-white pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Search Results Dropdown */}
      {isSearching && searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
          {searchResults.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => {
                setSearchQuery('')
                setSearchResults([])
                setIsSearching(false)
              }}
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{product.brand} - {product.model}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 