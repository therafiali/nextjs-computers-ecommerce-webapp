"use client";

import Link from "next/link";
import { useCategoryProducts } from "@/hooks/useDynamicProduct";
import { ProductCard } from "@/components/products/ProductCard";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Map of category slugs to display names
const categoryNames: { [key: string]: string } = {
  server: "Servers",
  switch: "Switches",
  workstation: "Workstations",
  sfp: "SFP Modules",
  "graphic-card": "Graphic Cards",
  "ethernet-card": "Ethernet Cards",
  accessories: "Accessories",
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const { products, category, isLoading, isError } = useCategoryProducts(slug);

  // Get display name for the category
  const displayName = categoryNames[slug] || category?.name || slug;
  const description =
    category?.description ||
    `Browse our collection of ${displayName.toLowerCase()}`;

  // If no products and not loading, category might not exist
  if (!isLoading && !category && products.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-primary">
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/#categories" className="text-gray-500 hover:text-primary">
          Categories
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-900 dark:text-white">{displayName}</span>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {displayName}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner />
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center text-red-600 dark:text-red-400 min-h-[400px] flex items-center justify-center">
          <p>Failed to load products. Please try again later.</p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && products.length === 0 && (
        <div className="text-center min-h-[400px] flex flex-col items-center justify-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            No products found in this category.
          </p>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !isError && products.length > 0 && (
        <>
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {products.length} product{products.length !== 1 ? "s" : ""}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
