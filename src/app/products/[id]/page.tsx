

import { ProductDetails } from '@/components/products/ProductDetails'
import { use } from 'react'
import { sanityClient } from '@/lib/sanity'

type PageProps = {
  params: Promise<{
    id: string
  }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = await sanityClient.fetch(`
    *[_type == "product"] {
      _id
    }
  `)
  
  return products.map((product: { _id: string }) => ({
    id: product._id,
  }))
}

// Page component
export default function ProductPage({ params }: PageProps) {
  const resolvedParams = use(params)

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails productId={resolvedParams.id} />
    </div>
  )
} 