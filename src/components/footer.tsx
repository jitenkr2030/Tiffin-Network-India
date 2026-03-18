import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TNI</span>
              </div>
              <span className="font-bold text-xl">Tiffin Network India</span>
            </div>
            <p className="text-gray-300 mb-4">
              Fresh, homemade tiffins delivered daily to your doorstep. 
              Serving Delhi with love and care since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/918700189551"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Book Tiffin
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">+91 87001 89551</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">order@tiffinnetworkindia.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  Main Kitchen, Janakpuri<br />
                  New Delhi, Delhi 110058
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">
                  Mon-Sun: 7:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
          <div className="flex flex-wrap gap-2">
            {["Janakpuri", "Palam", "Sagar Pur", "Uttam Nagar", "Maya Puri", "Hari Nagar", "Tilak Nagar"].map((area) => (
              <span
                key={area}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tiffin Network India. All rights reserved.</p>
          <p className="text-sm mt-2">
            <a href="/admin" className="hover:text-orange-400 transition-colors">
              Admin Dashboard
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;