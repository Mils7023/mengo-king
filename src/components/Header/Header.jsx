"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, User } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MengoStore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/products" className="hover:text-orange-500">
            Products
          </Link>
          <Link href="/about-us" className="hover:text-orange-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-orange-500" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </Link>
          <Link href="/login">
            <User className="h-6 w-6 text-gray-700 hover:text-orange-500" />
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link href="/" className="block hover:text-orange-500">
            Home
          </Link>
          <Link href="/products" className="block hover:text-orange-500">
            Products
          </Link>
          <Link href="/about" className="block hover:text-orange-500">
            About
          </Link>
          <Link href="/contact" className="block hover:text-orange-500">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

