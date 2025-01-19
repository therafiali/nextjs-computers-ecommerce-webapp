"use client"

import { Button } from '../ui/Button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-secondary dark:to-secondary-dark overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-white">
              Next-Gen Tech <br />
              <span className="text-primary">Best Prices</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover the latest in technology with unbeatable deals on laptops, 
              components, and accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">View Deals</Button>
            </div>
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl">
              <Image
                src="/hero-product.jpg"
                alt="Featured Gaming PC"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 