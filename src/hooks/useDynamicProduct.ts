import useSWR from 'swr'
import { sanityClient } from '@/lib/sanity'

interface SanityResponse {
  result: any[]
}

interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  image?: any
}

const fetcher = (query: string) => sanityClient.fetch(query)

// Fetch all categories
export function useCategories() {
  const { data, error, isLoading } = useSWR<Category[]>(
    `*[_type == "category"] | order(name asc) {
      _id,
      name,
      slug,
      description,
      image
    }`,
    fetcher
  )

  return {
    categories: data ?? [],
    isLoading,
    isError: error
  }
}

// Fetch products by category slug
export function useCategoryProducts(categorySlug: string) {
  const { data, error, isLoading } = useSWR<{products: any[], category: any}>(
    categorySlug ? `category-${categorySlug}` : null,
    async () => {
      const query = `{
        "products": *[_type == "product" && category->slug.current == $slug] {
          _id,
          _type,
          name,
          slug,
          images,
          price,
          description,
          category->{
            _id,
            name,
            slug
          },
          stock,
          specifications
        },
        "category": *[_type == "category" && slug.current == $slug][0] {
          _id,
          name,
          slug,
          description,
          image
        }
      }`
      
      return await sanityClient.fetch(query, { slug: categorySlug })
    }
  )

  return {
    products: data?.products ?? [],
    category: data?.category ?? null,
    isLoading,
    isError: error
  }
}

// Fetch server products (keep your existing hook if needed)
export function useServerProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "Server"] {
      _id,
      _type,
      name,
      slug,
      images,
      price,
      description,
      category->{
        _id,
        name,
        slug
      },
      stock,
      specifications
    }`,
    fetcher
  );

  return {
    products: data?.result ?? [],
    isLoading,
    isError: error
  };
}