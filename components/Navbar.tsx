import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Gamepad2,
  Images,
  CalendarRange,
  Phone,
  Home,
} from "lucide-react";
import logo from "../assets/terminal-logo.png";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navLinks: NavItem[] = [
  { name: "Home", href: "#home", icon: <Home className="h-3.5 w-3.5" /> },
  { name: "Games", href: "#Games", icon: <Gamepad2 className="h-3.5 w-3.5" /> },
  { name: "Gallery", href: "#gallery", icon: <Images className="h-3.5 w-3.5" /> },
  {
    name: "Booking",
    href: "#booking",
    icon: <CalendarRange className="h-3.5 w-3.5" />,
  },
  { name: "Contact", href: "#contact", icon: <Phone className="h-3.5 w-3.5" /> },
];

interface NavLinkProps extends NavItem {
  onClick?: (href: string) => void;
  isActive?: boolean;
}

const DesktopNavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  icon,
  onClick,
  isActive,
}) => (
  <button
    onClick={() => onClick && onClick(href)}
    className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 
    ${
      isActive
        ? "text-white"
        : "text-gray-300 hover:text-white hover:bg-white/5"
    }`}
  >
    <span
      className={`absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/40 via-indigo-500/40 to-emerald-400/40 blur-xl opacity-0 transition-opacity duration-200 ${
        isActive ? "opacity-80" : "group-hover:opacity-60"
      }`}
      aria-hidden="true"
    />
    <span className="relative flex items-center gap-1.5">
      <span
        className={`flex items-center justify-center rounded-full border-[1px] border-white/15 bg-black/40 p-1 ${
          isActive ? "shadow-[0_0_18px_rgba(56,189,248,0.7)]" : ""
        }`}
      >
        {icon}
      </span>
      <span>{name}</span>
    </span>
    <span
      className={`pointer-events-none absolute -bottom-1 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-transform origin-left ${
        isActive ? "scale-x-100" : "scale-x-0"
      }`}
    />
  </button>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // تغيير خلفية النـافبار مع السكروول
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy – يحدد أي سكشن أنت فيه
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140; // هامش تحت النـافبار

      let current = "home";

      navLinks.forEach((link) => {
        const id = link.href.substring(1);
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => handleNavClick("#booking");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.9)]"
          : "bg-gradient-to-b from-black/95 via-black/40 to-transparent"
      }`}
    >
      {/* شريط تقدم بسيط فوق (progress bar) */}
      <div className="pointer-events-none h-[2px] bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* اللوغو + الاسم */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-500/50 via-indigo-500/50 to-emerald-400/50 blur-xl opacity-70" />
              <img
                src={logo}
                alt="The Terminal VR"
                className="relative h-14 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-[0.3em] text-sky-300/70">
                Taj |City Mall
              </span>
              <span className="text-xl font-semibold text-white flex items-baseline tracking-wide">
                The Terminal{" "}
                <span
                  style={{ color: "#5B9CC4" }}
                  className="ml-1 font-extrabold"
                >
                  VR
                </span>
              </span>
            </div>
          </div>

          {/* روابط الديسكتوب */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              {navLinks.map((link) => (
                <DesktopNavLink
                  key={link.name}
                  {...link}
                  isActive={activeSection === link.href.substring(1)}
                  onClick={handleNavClick}
                />
              ))}
            </div>

            {/* زر الحجز الواضح */}
            <button
              onClick={handleBookNow}
              className="relative inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-gradient-to-r from-emerald-500/90 via-sky-500/90 to-indigo-500/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_0_25px_rgba(45,212,191,0.8)] transition-transform duration-150 hover:scale-105"
            >
              <span className="absolute -inset-0.5 rounded-full bg-emerald-400/30 blur-lg" />
              <span className="relative flex items-center gap-1.5">
                <CalendarRange className="h-4 w-4" />
                Book a Session
              </span>
            </button>
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
        <div className="md:hidden border-t border-white/10 bg-black/98 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-white/10 border border-white/15"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10">
                      {link.icon}
                    </span>
                    {link.name}
                  </span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  )}
                </button>
              );
            })}

            <button
              onClick={handleBookNow}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/80 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(52,211,153,0.9)]"
            >
              <CalendarRange className="h-4 w-4" />
              Book a Session
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
