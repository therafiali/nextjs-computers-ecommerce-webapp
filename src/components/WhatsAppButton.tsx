"use client"

import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <>
      {/* Desktop Version */}
      <Link
        href={`whatsapp://send?phone=03009224816`}
        target="_blank"
        className="fixed bottom-20 right-6 z-50 hidden md:flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="font-medium">Chat with us</span>
      </Link>

      {/* Mobile Version */}
      <Link
        href={`whatsapp://send?phone=923278458048`}
        className="fixed bottom-4 right-4 z-50 md:hidden bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
      >
        <FaWhatsapp className="w-6 h-6" />
      </Link>

      {/* Need Help Text - Desktop */}
      <div className="fixed bottom-20 right-48 z-50 hidden md:block">
        <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">Need Help? Chat with us</p>
        </div>
      </div>
    </>
  )
} 
