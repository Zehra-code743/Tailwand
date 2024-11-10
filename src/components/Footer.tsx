import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <ul className="space-y-4">
          <li className="text-lg">
            A perfume is a liquid mixture used to emit a pleasant odour. It is
            formed from fragrant essential oils derived from plants and spices or
            synthetic aromatic compounds. Cosmetic fragrances applied to a person's body to emit
            a pleasant smell include perfume.
          </li>
          <li className="flex items-center space-x-2 text-lg">
            <span>Facebook:</span>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Visit our Facebook page
            </Link>
            <FaFacebook size={20} className="text-blue-500 hover:text-blue-700" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
