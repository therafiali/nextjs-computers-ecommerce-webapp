import useSWR from 'swr'
import { sanityClient } from '@/lib/sanity'

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