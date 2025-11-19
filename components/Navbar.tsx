import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/terminal-logo.png'; // ← استيراد اللوغو فقط

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Games', href: '#games' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Booking', href: '#booking' },
  { name: 'Contact', href: '#contact' },
];

interface NavLinkProps {
  name: string;
  href: string;
  onClick?: (href: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ name, href, onClick }) => (
  <button
    onClick={() => onClick && onClick(href)}
    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
  >
    {name}
  </button>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ==== اللوغو + النص ==== */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-auto object-contain"   // ← تكبير اللوغو
            />

            <span className="text-xl font-semibold text-white flex items-baseline">
              The Terminal{" "}
              <span
                style={{ color: "#5B9CC4" }}
                className="ml-1 font-bold"  // ← إضافة Bold هنا فقط
              >
                VR
              </span>
            </span>
          </div>

          {/* روابط الديسكتوب */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} {...link} onClick={handleNavClick} />
            ))}
          </div>

          {/* زر المنيو للموبايل */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* منيو الموبايل */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
