"use client";

import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

const footerLinks = {
  shop: [
    { name: "Server", href: "/server" },
    { name: "Switch", href: "/switch" },
    { name: "Workstation", href: "/workstation" },
    { name: "All Products", href: "/products" },
  ],
  // support: [
  //   { name: 'Contact Us', href: '/contact' },
  //   { name: 'FAQs', href: '/faqs' },
  //   { name: 'Shipping', href: '/shipping' },
  //   { name: 'Returns', href: '/returns' },
  // ],
  // company: [
  //   { name: 'About Us', href: '/about' },
  //   { name: 'Blog', href: '/blog' },
  //   { name: 'Careers', href: '/careers' },
  //   { name: 'Privacy Policy', href: '/privacy' },
  // ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-secondary border-t dark:border-yellow-800">
      {/* Newsletter Section */}
      {/* <div className="border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get the latest updates on new products and upcoming sales
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Links Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          {/* Shop Links */}
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

          {/* Support Links */}
          {/* <div>
            <h4 className="font-bold text-lg mb-4 text-secondary dark:text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
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

          {/* Company Links */}
          {/* <div>
            <h4 className="font-bold text-lg mb-4 text-secondary dark:text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-secondary dark:text-white">
              Contact
            </h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 321 3523966</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 327 8458048</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hhcomputersshop@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <CiLocationOn size={25} />

                <span>
                  Shop # G-E 56, Techno City Mall, I.I Chundrigar Road Near MCB
                  Tower, Karachi.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© 2025 HH Computers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
