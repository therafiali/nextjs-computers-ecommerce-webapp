import useSWR from 'swr';
import { Product } from '@/types/product';
import { sanityClient } from '@/lib/sanity';

interface SanityResponse {
  result: Product;
}

const fetcher = async (query: string) => {
  const response = await sanityClient.fetch(query);
  return { result: response[0] };
};

export function useProduct(slug: string) {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && slug.current == "${slug}"] {
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
    product: data?.result,
    isLoading,
    isError: error
  };
} 