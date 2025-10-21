import { useState } from "react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#27287A] sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Qasma</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-opacity"
              >
                Features
              </a>
              <a
                href="#download"
                className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-opacity"
              >
                Download
              </a>
              <a
                href="#about"
                className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-opacity"
              >
                About
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:opacity-80 focus:outline-none transition-opacity"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#27287A] border-t border-white/20 rounded-b-lg">
              <a
                href="#features"
                className="hover:opacity-80 block px-3 py-2 rounded-md text-base font-medium transition-opacity"
              >
                Features
              </a>
              <a
                href="#download"
                className="hover:opacity-80 block px-3 py-2 rounded-md text-base font-medium transition-opacity"
              >
                Download
              </a>
              <a
                href="#about"
                className="hover:opacity-80 block px-3 py-2 rounded-md text-base font-medium transition-opacity"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
