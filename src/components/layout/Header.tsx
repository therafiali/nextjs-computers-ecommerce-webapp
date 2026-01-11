"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Search } from "../Search";
import { CiLocationOn } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { useCategories } from "@/hooks/useCategory";


// Static navigation items that aren't categories
const staticNavItems = [
  { name: "All Products", href: "/products" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Fetch categories dynamically
  const { categories, isLoading } = useCategories();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Combine dynamic categories with static navigation items
  const navigationItems = [
    ...categories.map(cat => ({
      name: cat.name,
      href: `/category/${cat.slug.current}`
    })),
    ...staticNavItems
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-secondary text-white shadow-md">
      {/* Top Bar */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col py-3 sm:py-6 ">
            {/* Top Section */}
            <div className="flex items-center justify-between min-h-[60px] sm:h-16 gap-3">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image 
                  src={'/hhcomputers.png'} 
                  className="bg-transparent h-12 sm:h-16 lg:h-20 w-auto" 
                  alt="HH Computers Logo" 
                  height={200} 
                  width={200}
                  priority
                />
              </Link>

              {/* Desktop Search Bar */}
              <div className="flex-1 mx-2 sm:mx-4 lg:mx-6 max-w-2xl hidden lg:block">
                <Search />
              </div>
              
              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
                <Link
                  href={`https://wa.me/923278458048`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">Chat with Us</span>
                </Link>
                <ThemeToggle />
              </div>

              {/* Mobile/Tablet Actions */}
              <div className="flex lg:hidden items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <Link
                  href={`https://wa.me/923278458048`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <ThemeToggle />
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? (
                    <HiX className="w-6 h-6 text-black dark:text-white" />
                  ) : (
                    <HiMenu className="w-6 h-6 text-black dark:text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Tablet Search Bar (visible on md, hidden on lg+) */}
            <div className="hidden md:block lg:hidden mt-3">
              <Search />
            </div>

            {/* Mobile Search Bar (visible on mobile only) */}
            <div className="md:hidden mt-3">
              <Search />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation - Desktop & Tablet */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-yellow-900 dark:bg-[#1a1a1a] hidden lg:block">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-12">
              <span className="text-white text-sm">Loading categories...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-wrap gap-4 xl:gap-8 py-2 min-h-[48px]">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm xl:text-base font-medium text-white hover:text-yellow-400 transition-colors py-2 whitespace-nowrap"
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Address Banner */}
      <Link href="/contact-us">
        <div className="bg-yellow-500 overflow-hidden">
          <div className="py-2 relative">
            <div className="flex items-center marquee space-x-8">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-black font-medium flex items-center text-xs sm:text-sm whitespace-nowrap">
                  <CiLocationOn className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  Shop # G-E 50 & Shop # G-E 56, Ground Floor, Techno City Mall,
                  I.I Chundrigar Road Near MCB Tower, Karachi.
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Slide-in Menu */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-white dark:bg-[#1a1a1a] shadow-2xl z-50 lg:hidden overflow-y-auto transform transition-transform duration-300"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6 text-gray-900 dark:text-white" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              {isLoading ? (
                <div className="text-center py-8">
                  <span className="text-gray-600 dark:text-gray-300">Loading categories...</span>
                </div>
              ) : (
                <>
                  {/* Categories Section */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      Categories
                    </h3>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <Link
                          key={category._id}
                          href={`/category/${category.slug.current}`}
                          className="block px-3 py-2.5 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-yellow-50 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Static Links Section */}
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                    <div className="space-y-1">
                      {staticNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2.5 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-yellow-50 dark:hover:bg-gray-800 hover:text-yellow-600 dark:hover:text-yellow-400 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Link */}
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
                    <Link
                      href={`https://wa.me/923278458048`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Chat with Us on WhatsApp</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}