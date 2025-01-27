import useSWR from 'swr';
import { Product } from '@/types/product';
import { sanityClient } from '@/lib/sanity';

interface SanityResponse {
  result: Product[];
}

const fetcher = async (query: string) => {
  const response = await sanityClient.fetch(query);
  return { result: response };
};

export function useProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product"] {
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

export function useSwitchProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "Switch"] {
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

export function useWorkstationProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "Workstation"] {
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

export function useSfpProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "SFP"] {
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

export function useAccessoriesProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "Accessories"] {
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

export function useGraphicCardProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "graphic-card"] {
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

export function useEthernetCardProducts() {
  const { data, error, isLoading } = useSWR<SanityResponse>(
    `*[_type == "product" && category->name == "ethernet-card"] {
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