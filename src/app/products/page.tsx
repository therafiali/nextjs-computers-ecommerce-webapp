"use client"

import { getCategories } from '@/data/categories'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductsPage() {
  const allCategories = getCategories()
  // Flatten all products from all categories into a single array
  const allProducts = allCategories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categoryName: category.name
    }))
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-900 dark:text-white">All Products</span>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">All Products</h1>
        <p className="text-gray-600 dark:text-gray-300">Browse our complete collection of products</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {allProducts.map((product) => (
          <Link 
            key={product.id}
            href={`/products/${product.id}`}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-gray-300 dark:border-gray-600 shadow-gray-300 dark:shadow-gray-600"
          >
            {/* Product Image */}
            <div className="relative aspect-square">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="mb-2">
                <span className="text-xs font-medium text-yellow-500 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded-full">
                  {product.categoryName}
                </span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {product.brand} - {product.model}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">
                    ₨{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₨{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.stock === 'In Stock'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {product.stock}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}