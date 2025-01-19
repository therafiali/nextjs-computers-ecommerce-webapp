"use client"

import Link from 'next/link'
import Image from 'next/image'
import { getCategories, Category } from '@/data/categories'

export function CategorySection() {
  const allCategories = getCategories()
  console.log(allCategories)


  return (
    <section className="py-12 bg-gray-50 dark:bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Browse our wide selection of computer products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allCategories.map((category: Category) => (
            <Link
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-secondary-light shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 