import { useState, useEffect, useRef } from "react";
import { NavConfig } from "@/config";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("/");
  const menuRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef<boolean>(false);
  const scrollStartRef = useRef<number | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (href: string): void => {
    isNavigatingRef.current = true;
    setActiveLink(href);
    setIsMenuOpen(false);
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 100);
  };

  useEffect(() => {
    setActiveLink(window.location.pathname + window.location.hash);

    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = (): void => {
      if (isMenuOpen && !isNavigatingRef.current) {
        const currentScroll = window.scrollY;
        if (scrollStartRef.current === null) {
          scrollStartRef.current = currentScroll;
        }
        if (currentScroll - (scrollStartRef.current ?? 0) > 50) {
          setIsMenuOpen(false);
          scrollStartRef.current = null;
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      scrollStartRef.current = null;
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#27287A] sticky top-0 z-50 text-white" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
              onClick={() => handleLinkClick("/")}
            >
              Qasma
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 relative">
              {NavConfig.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-opacity ${
                      isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full"></span>
                    )}
                  </a>
                );
              })}
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
              {NavConfig.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-opacity ${
                      isActive ? "bg-white/10" : "hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
