import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { urlForImage } from '@/lib/sanity';

interface ProductCardProps {
  product: Product;
}


export function ProductCard({ product }: ProductCardProps) {
  // Safely handle image URL
  const imageUrl = product.images && product.images[0]?.asset 
    ? urlForImage(product.images[0].asset).url()
    : '/placeholder.jpg'; // Add a placeholder image in your public folder

  return (
    <Link 
      href={`/products/${product._id}`}
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-gray-300 dark:border-gray-600 shadow-gray-300 dark:shadow-gray-600"
    >
      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-yellow-500 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded-full">
            {product.category?.name || 'Uncategorized'}
          </span>
        </div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">
              ₨{product.price.toLocaleString()}
            </span>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            product.stock > 0
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
          }`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </Link>
  );
} 
