"use client"

import { getProductById } from '@/data/categories'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { useState, use } from 'react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params)
  const productId = parseInt(id)
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  if (!product) {
    notFound()
  }

 


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setMousePosition({ x, y })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-900 dark:text-white">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div 
            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <div className={`absolute inset-0 transition-transform duration-200 ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}>
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain transform-gpu"
                priority
                style={isZoomed ? {
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                } : undefined}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 group ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">{product.brand} - {product.model}</p>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-primary">Rs.{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  Rs.{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                product.stock === 'In Stock'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.stock}
              </span>
              <span className="text-sm text-gray-500">{product.warranty}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>

          {/* Actions */}
          <div className="flex space-x-4">
            <Link 
              href={`http://web.whatsapp.com/send/?phone=923213523966&text=${encodeURIComponent(
                `Hi, I'm interested in ${product.name} (${product.model}). Please provide more information.`
              )}&type=phone_number&app_absent=0`}
              target="_blank"
              className="flex-1"
            >
              <Button size="lg" className="w-full">
                Contact for Price
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="flex-1">
              Add to Wishlist
            </Button>
          </div>

          {/* Specifications */}
          <div className="border-t dark:border-gray-700 pt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Specifications</h2>
            <dl className="grid grid-cols-1 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3 gap-4">
                  <dt className="text-gray-600 dark:text-gray-400 font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </dt>
                  <dd className="text-gray-900 dark:text-white col-span-2">
                    {Array.isArray(value) ? value.join(', ') : value.toString()}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Features */}
          <div className="border-t dark:border-gray-700 pt-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 