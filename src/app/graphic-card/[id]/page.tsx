import { ProductDetails } from '@/components/products/ProductDetails'
import { sanityClient } from '@/lib/sanity'

export async function generateStaticParams() {
  const products = await sanityClient.fetch<Array<{ _id: string }>>(`
    *[_type == "product" && category->name == "graphic-card"] {
      _id
    }
  `)
  
  return products.map((product) => ({
    id: product._id,
  }))
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails productId={params.id} />
    </div>
  )
} 