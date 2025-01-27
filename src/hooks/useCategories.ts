import useSWR from 'swr';
import { Category } from '@/types/product';
import { sanityClient } from '@/lib/sanity';

interface SanityResponse {
  result: Category[];
}

const fetcher = async (query: string) => {
  const response = await sanityClient.fetch(query);
  return { result: response };
};

export function useCategories() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "category"] {
      _id,
      name,
      description,
      "image": image.asset->,
      slug,
      _createdAt
    }`,
    fetcher
  );

  return {
    categories: data?.result ?? [],
    isLoading,
    isError: error
  };
} 