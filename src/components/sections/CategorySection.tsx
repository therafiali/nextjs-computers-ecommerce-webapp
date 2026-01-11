"use client";

import { useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanity";
import { urlForImage } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryProduct {
  _id: string;
  name: string;
  category: {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
  };
  price: number;
  images: Array<{
    asset: {
      _ref: string;
    };
  }>;
}

export function CategorySection() {
  const [products, setProducts] = useState<CategoryProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        // Fetch one product from each category
        const query = `*[_type == "category"] {
          "product": *[_type == "product" && references(^._id)][0] {
            _id,
            name,
            price,
            images,
            category->{
              _id,
              name,
              slug
            }
          }
        }.product`;

        const result = await sanityClient.fetch(query);
        console.log("result", result);
        setProducts(result.filter(Boolean)); // Remove any null values
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section id="categories" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our wide range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/category/${product.category.slug.current}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {product.images?.[0] && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlForImage(product.images[0].asset).url()}
                        alt={product.name}
                        fill
                        className="object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {product.category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Featured: {product.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">
                        ₨{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary">
                        View Category →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-300"
          >
            View All Products
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}