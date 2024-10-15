import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 z-50 w-full h-20 transition duration-300 ${isScrolled ? 'bg-hblue' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between h-full px-4 mx-auto text-white max-w-7xl sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/images/logo.svg" alt="HexaHome Logo" width={167} height={44} className="h-12" />
          </Link>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/hire-developers">Hire Developers</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/products">Products</Link>
        </nav>

        {/* Connect Button - Hidden on Mobile */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 text-blue-600 transition duration-300 bg-white rounded hover:bg-gray-100 focus:outline-none">
            Connect With Us
          </button>
        </div>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <Image
              src="/images/burger-menu-svgrepo-com.svg" // Update the path to your SVG image
              alt="Menu"
              width={24} // Adjust the width and height as needed
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 w-full text-white md:hidden bg-hblue top-20">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/about" onClick={toggleMenu}>About Us</Link>
            <Link href="/services" onClick={toggleMenu}>Services</Link>
            <Link href="/hire-developers" onClick={toggleMenu}>Hire Developers</Link>
            <Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link>
            <Link href="/blog" onClick={toggleMenu}>Blog</Link>
            <Link href="/careers" onClick={toggleMenu}>Careers</Link>
            <Link href="/products" onClick={toggleMenu}>Products</Link>
            <button 
              onClick={toggleMenu}
              className="px-4 py-2 text-blue-600 transition duration-300 bg-white rounded hover:bg-gray-100 focus:outline-none">
              Connect With Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
