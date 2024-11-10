import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Perfume Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="ml-2 text-xl font-semibold">Perfume Shop</h1>
        </div>

        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="/blog" className="text-white hover:text-blue-400">
            Blogs
          </Link>
          <Link href="/product" className="text-white hover:text-blue-400">
            Products
          </Link>
          <Link href="/contact-us" className="text-white hover:text-blue-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
