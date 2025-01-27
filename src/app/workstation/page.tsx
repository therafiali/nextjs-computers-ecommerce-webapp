"use client"

import Link from 'next/link'
import { useWorkstationProducts } from '@/hooks/useProducts'
import { ProductCard } from '@/components/products/ProductCard'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'


export default function WorkstationPage() {
  const { products, isLoading, isError } = useWorkstationProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-900 dark:text-white">Workstations</span>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Workstations</h1>
        <p className="text-gray-600 dark:text-gray-300">Browse our collection of high-performance workstations</p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner/>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center text-red-600 dark:text-red-400 min-h-[400px] flex items-center justify-center">
          <p>Failed to load workstations. Please try again later.</p>
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}