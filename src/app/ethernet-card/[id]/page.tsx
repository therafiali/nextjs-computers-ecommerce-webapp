import { ProductDetails } from '@/components/products/ProductDetails'
import { sanityClient } from '@/lib/sanity'

interface PageProps {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate static params for graphic card products
export async function generateStaticParams() {
  const products = await sanityClient.fetch(`
    *[_type == "product" && category->name == "Ethernet Card"] {
      _id
    }
  `)
  
  return products.map((product: { _id: string }) => ({
    id: product._id,
  }))
}

// Page component
export default async function EthernetCardProductPage({ params }: PageProps) {
  const resolvedParams = await params

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails productId={resolvedParams.id} />
    </div>
  )
} 