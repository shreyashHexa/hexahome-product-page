import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full h-20 bg-hblue">
      <div className="flex items-center justify-between h-full px-4 mx-auto text-white max-w-7xl sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/images/logo.svg" alt="HexaHome Logo" className="h-12" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/about.js">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/hire-developers">Hire Developers</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/products">Products</Link>
        </nav>

        {/* Connect Button */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 text-blue-600 transition duration-300 bg-white rounded hover:bg-gray-100 focus:outline-none">
            Connect With Us
          </button>
        </div>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
