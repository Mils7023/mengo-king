import Link from "next/link";
import Image from "next/image";
import {  Star } from "lucide-react";

export const HomeContainer = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Discover the Best Mongo Products!
          </h1>
          <p className="mt-4 text-gray-600">
            Your one-stop shop for high-quality and fresh Mongo items.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((product) => (
            <div key={product} className="bg-white shadow-md rounded-lg p-4">
              <Image
                src="/product-placeholder.jpg"
                alt="Product"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">Mongo Product {product}</h3>
              <p className="text-gray-600 mt-1">$19.99</p>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-gray-400 w-5 h-5" />
              </div>
              <Link
                href="/products"
                className="mt-4 block bg-orange-500 text-white px-4 py-2 rounded-md text-center hover:bg-orange-600"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Browse by Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {["Fresh Mongo", "Mongo Accessories", "Premium Mongo"].map((category) => (
              <Link
                key={category}
                href="/categories"
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose MengoStore?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Premium Quality", desc: "We offer the best Mongo products in the market." },
            { title: "Fast Shipping", desc: "Quick and reliable delivery to your doorstep." },
            { title: "100% Satisfaction", desc: "Our customers love our products and service." },
          ].map((item) => (
            <div key={item.title} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Alice", review: "Amazing quality! Highly recommend." },
              { name: "John", review: "Fast delivery and excellent service." },
              { name: "Emily", review: "The best Mongo store online!" },
            ].map((customer) => (
              <div key={customer.name} className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-gray-600">"{customer.review}"</p>
                <h3 className="mt-3 font-semibold">{customer.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Start Shopping Now</h2>
        <p className="mt-2 text-gray-600">Join thousands of happy customers today.</p>
        <Link
          href="/products"
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600"
        >
          Explore Products
        </Link>
      </section>
    </div>
  );
}
