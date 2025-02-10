"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Search } from "../Search";
import { CiLocationOn } from "react-icons/ci";
import Logo from "@/assets/logo/primary-logo.png";
import Image from "next/image";

const navigationItems = [
  { name: "Server", href: "/server" },
  { name: "Switch", href: "/switch" },
  { name: "Workstation", href: "/workstation" },
  { name: "SFP", href: "/sfp" },
  { name: "Graphic Cards", href: "/graphic-card" },
  { name: "Ethernet Card", href: "/ethernet-card" },
  // { name: "Accessories", href: "/accessories" },
  { name: "All Products", href: "/products" },
  { name: "Contact Us", href: "/contact-us" },
];

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
          <div className="flex flex-col py-8">
            {/* Top Section */}
            <div className="flex items-center justify-between h-16 ">
              {/* Logo */}
              <Link href="/" className="flex items-center my-2">
                <Image src={'/hhcomputers.png'} className="bg-transparent" alt="Logo" height={300 } width={300 } />
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
                  <span className="text-sm font-medium">Chat with Us</span>
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
                  <span className="text-sm text-black dark:text-white font-medium">
                    MENU
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden py-3">
              <Search />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation - Desktop */}
      <nav className="border-b border-gray-800 bg-yellow-900 dark:bg-[#1a1a1a] mx-auto text-center w-full hidden md:block">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-center space-x-8 h-12">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-white dark:text-white-300 hover:text-yellow-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Address Banner */}
      <Link href="/contact-us" >
        <div className="bg-yellow-500 overflow-hidden">
          <div className="py-2 relative">
            <div className="flex items-center marquee space-x-8">
              <span className="text-black font-medium flex items-center">
                <CiLocationOn className="w-5 h-5 mr-2" />
                Shop # G-E 50 & Shop # G-E 56, Ground Floor, Techno City Mall,
                I.I Chundrigar Road Near MCB Tower, Karachi.
              </span>
              <span className="text-black font-medium flex items-center">
                <CiLocationOn className="w-5 h-5 mr-2" />
                Shop # G-E 56, Techno City Mall, I.I Chundrigar Road Near MCB
                Tower, Karachi.
              </span>
              <span className="text-black font-medium flex items-center">
                <CiLocationOn className="w-5 h-5 mr-2" />
                Shop # G-E 56, Techno City Mall, I.I Chundrigar Road Near MCB
                Tower, Karachi.
              </span>
              <span className="text-black font-medium flex items-center">
                <CiLocationOn className="w-5 h-5 mr-2" />
                Shop # G-E 56, Techno City Mall, I.I Chundrigar Road Near MCB
                Tower, Karachi.
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-[#1a1a1a] border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href={`http://web.whatsapp.com/send/?phone=923213523966`}
                target="_blank"
                className="flex items-center space-x-2 text-green-500 py-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Chat with Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
