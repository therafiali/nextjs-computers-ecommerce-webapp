"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa'
import { getCategories } from '@/data/categories'
import { Search } from '../Search'

const allCategories = getCategories()

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-secondary  text-white">
      {/* Top Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            {/* Top Section */}
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-yellow-500">H&H Computer</span>
                
              </Link>

              {/* Desktop Search Bar */}
              <div className="flex-1 mx-auto w-full max-w-2xl hidden md:block">
                <Search />
              </div>
              <div className="hidden md:flex items-center space-x-4">

<Link
              href={`http://web.whatsapp.com/send/?phone=923213523966`}
              target="_blank"
              className="ml-auto flex items-center space-x-2 text-green-500 hover:text-green-400"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="text-sm font-medium">Contact Us</span>
            </Link>
            <ThemeToggle />
              </div>

              

              {/* Mobile Actions */}
              <div className="flex md:hidden items-center space-x-4">
                <ThemeToggle />
               
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white"
                >
                  <span className="text-sm font-medium">MENU</span>
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden py-3">
              <Search />
            </div>

            {/* WhatsApp Contact */}
      
          </div>
        </div>
      </div>

      {/* Categories Navigation - Desktop */}
      <nav className="border-b border-gray-800 bg-yellow-900 dark:bg-[#1a1a1a] mx-auto text-center w-full hidden md:block">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-center space-x-8 h-12">
            {allCategories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="text-lg font-medium text-white dark:text-white-300 hover:text-yellow-500 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#1a1a1a] border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                {allCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link
                href={`http://web.whatsapp.com/send/?phone=923213523966`}
                target="_blank"
                className="flex items-center space-x-2 text-green-500 py-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
