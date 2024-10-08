import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full h-20 bg-transparent shadow-md">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/images/logo.png" alt="Logo" className="h-12" />
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/about" legacyBehavior>
            <a className="text-white hover:text-blue-600">About Us</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="text-white hover:text-blue-600">Services</a>
          </Link>
          <Link href="/hire-developers" legacyBehavior>
            <a className="text-white hover:text-blue-600">Hire Developers</a>
          </Link>
          <Link href="/portfolio" legacyBehavior>
            <a className="text-white hover:text-blue-600">Portfolio</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-white hover:text-blue-600">Blog</a>
          </Link>
          <Link href="/careers" legacyBehavior>
            <a className="text-white hover:text-blue-600">Careers</a>
          </Link>
          <Link href="/products" legacyBehavior>
            <a className="text-white hover:text-blue-600">Products</a>
          </Link>
        </nav>

        {/* Connect Button */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 text-blue-600 transition duration-300 bg-white rounded hover:bg-blue-700">
            Connect With Us
          </button>
        </div>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
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

export default Header;
 