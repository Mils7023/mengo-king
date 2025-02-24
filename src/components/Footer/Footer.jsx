import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">MengoStore</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for the best Mongo products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <Link href="#" className="hover:text-orange-500">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MengoStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

