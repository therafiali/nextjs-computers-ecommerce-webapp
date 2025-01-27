import useSWR from 'swr';
import { Product } from '@/types/product';

interface SanityResponse {
  result: Product[];
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data as SanityResponse;
};

export function useCategoryProducts(categoryId: string) {
  const encodedQuery = encodeURIComponent(`*[_type == 'product' && category._ref match '${categoryId}']`);
  const apiUrl = `https://7ouvl02m.api.sanity.io/v2022-03-07/data/query/production?query=${encodedQuery}`;

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  return {
    products: data?.result ?? [],
    isLoading,
    isError: error
  };
} 