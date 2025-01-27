export interface SanityImage {
  _type: 'image';
  _key: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface ProductSpecification {
  key: string;
  value: string;
  _key: string;
}

export interface Category {
  _id: string;
  _type: 'category';
  name: string;
  description: string;
  image: SanityImage;
  slug: {
    current: string;
    _type: 'slug';
  };
  _createdAt: string;
  _updatedAt: string;
}

export interface Product {
  _id: string;
  _type: 'product';
  name: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  images: SanityImage[];
  price: number;
  description: string;
  category: Category;
  stock: number;
  specifications: ProductSpecification[];
} 