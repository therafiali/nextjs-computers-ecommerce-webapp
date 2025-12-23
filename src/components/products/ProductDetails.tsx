"use client"

import { useState, useEffect } from 'react'
import { sanityClient, urlForImage } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

interface ProductDetailsProps {
  productId: string
}

interface Product {
  _id: string
  name: string
  description: string
  price: number
  stock: number
  images: Array<{
    asset: {
      _ref: string
    }
  }>
  category: {
    name: string
    _id: string
  }
  specifications: Array<{
    key: string
    value: string
  }>
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await sanityClient.fetch<Product>(
          `*[_type == "product" && _id == $productId][0] {
            _id,
            name,
            description,
            price,
            stock,
            images,
            category->{
              _id,
              name
            },
            specifications
          }`,
          { productId }
        )
        setProduct(result)
      } catch (err) {
        setError('Failed to load product')
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Product</h2>
        <p className="text-gray-600 mb-4">{error || 'Product not found'}</p>
        <Link
          href="/products"
          className="text-primary hover:text-primary/80 font-medium"
        >
          ← Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {/* Product Images */}
        <div className="relative aspect-square rounded-lg overflow-hidden">
          {product.images?.[0] && (
            <Image
              src={urlForImage(product.images[0].asset).url()}
              alt={product.name}
              fill
              className=""
            />
          )}
        </div>

        {/* Product Info */}
        <div>
          <nav className="mb-4">
            <Link
              href={`/${product.category.name.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-primary"
            >
              {product.category.name}
            </Link>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>

          <div className="mb-6">
            <p className="text-2xl font-bold text-primary">
              ₨{product.price.toLocaleString()}
            </p>
            <p className={`mt-2 ${
              product.stock > 0 
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            }`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p>{product.description}</p>
          </div>

          {product.specifications && product.specifications.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-1 gap-4">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-gray-600 dark:text-gray-400">{spec.key}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <Link
              href={`https://wa.me/923278458048?text=I'm interested in ${product.name}`}
              target="_blank"
              className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-center"
            >
              Inquire on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
