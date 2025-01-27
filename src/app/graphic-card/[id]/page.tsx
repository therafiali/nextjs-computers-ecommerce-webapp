"use client"

import { ProductDetails } from '@/components/products/ProductDetails'
import { use } from 'react'

type PageProps = {
  params: Promise<{
    id: string
  }>
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductPage({ params }: PageProps) {
  const resolvedParams = use(params)

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails productId={resolvedParams.id} />
    </div>
  )
} 