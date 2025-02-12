"use client";

import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const footerLinks = {
  shop: [
    { name: "Server", href: "/server" },
    { name: "Switch", href: "/switch" },
    { name: "Workstation", href: "/workstation" },
    { name: "All Products", href: "/products" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-secondary border-t dark:border-yellow-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary dark:text-white">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary dark:text-white">Contact</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="flex items-center space-x-2">
                <CiLocationOn size={25} />
                <span>Shop # G-E 56, Techno City Mall, Karachi.</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={20} />
                <span>hhcomputersshop@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start gap-4 mt-8">
          <Link href="https://www.facebook.com/profile.php?id=61573011811882" target="_blank" className="text-blue-600 dark:text-gray-300 hover:text-blue-600">
            <Facebook size={30} color="white" className="bg-blue-500 rounded-md p-1" />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-pink-600">
            <Instagram size={30} color="white" className="bg-pink-500 rounded-md p-1" />
          </Link>
          <Link href="https://wa.me/923278458048" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-green-500">
          <FaWhatsapp size={30} color="white" className="bg-green-500 rounded-md p-1" />
          </Link>
          <Link href="mailto:hhcomputersshop@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-red-500">
            <Mail size={30} color="white" className="bg-red-500 rounded-md p-1" />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© 2025 HH Computers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}