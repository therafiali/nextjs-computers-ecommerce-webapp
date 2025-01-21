"use client";

import {
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Link from "next/link";

export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header Section */}
      <div className="bg-yellow-300 dark:bg-yellow-600">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-black">
            Contact Us
          </h1>
          <p className="mt-4 text-center text-gray-800 max-w-2xl mx-auto">
            {"Have questions? \n We're here to help. Send us a message and we'll respond as soon as possible."}
         
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp */}


          {/* Phone */}
          <Link   href="https://web.whatsapp.com/send/?phone=923213523966&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                 
                    +92 321 3523966
              
                </div>
              </div>
            </div>
          </Link>
          <Link   href="https://web.whatsapp.com/send/?phone=923278458048&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                 
                  +92 327 8458048
              
                </div>
              </div>
            </div>
          </Link>

          {/* Email */}
          {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <a
                  href="mailto:support@h&hcomputer.com"
                  className="text-blue-500 hover:text-blue-600"
                >
                  support@h&hcomputer.com
                </a>
              </div>
            </div>
          </div> */}

          {/* Address */}
          <Link href="https://www.google.com/maps/place/Techno+City+Mall/@24.8508129,67.0076902,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06624e4669:0x1b2d0b4eb5f62a96!8m2!3d24.8508129!4d67.0076902!16s%2Fg%2F11c305650d?entry=ttu" target="_blank" rel="noopener noreferrer">  
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6 text-black dark:text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Address
                </h3>
                <p className="text-black dark:text-white">Shop # G-E 56, Techno City Mall, I.I Chundrigar Road Near MCB Tower, Karachi.</p>
              </div>
            </div>
          </div>
          </Link>
        </div>

        {/* Contact Form and Map */}
        <div className="grid md:grid-cols-1 gap-8">
          {/* Contact Form */}
          {/* <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div> */}

          {/* Map */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Location
            </h2>
            <div className="aspect-square w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3620.381609675563!2d67.0076902!3d24.850812899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3eb33e06624e4669%3A0x1b2d0b4eb5f62a96!2sTechno%20City%20Corporate%20Tower%2C%20New%20Chali%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!3m2!1d24.850812899999998!2d67.0076902!5e0!3m2!1sen!2s!4v1737467358550!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                H&H Computer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Shop # G-E 56, Techno City Mall,
                <br />
                I.I Chundrigar Road Near MCB Tower,
                <br />
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
