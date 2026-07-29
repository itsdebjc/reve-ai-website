import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/links";

const SparkleCluster = () => (
  <svg width="26" height="18" viewBox="0 0 26 18" className="flex-shrink-0">
    <path d="M6 1 L7 5 L11 6 L7 7 L6 11 L5 7 L1 6 L5 5 Z" fill="#E893AC" />
    <path d="M18 3 L18.8 6 L21.5 6.8 L18.8 7.6 L18 10.5 L17.2 7.6 L14.5 6.8 L17.2 6 Z" fill="#E893AC" />
    <path d="M23 10 L23.5 12 L25.5 12.5 L23.5 13 L23 15 L22.5 13 L20.5 12.5 L22.5 12 Z" fill="#E893AC" />
  </svg>
);

const NAV_LINKS = [
  { href: "/services", label: "SERVICES" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/learning", label: "LEARNING" },
  { href: "/about", label: "ABOUT" },
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#20262A] border-b border-white/10">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-16 py-5">
        <a href="/" className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Anton', sans-serif" }} className="text-2xl text-[#F2E4D8] leading-none uppercase">
              Reve
            </span>
            <SparkleCluster />
          </div>
          <div className="text-[10px] font-bold tracking-[0.14em] text-[#F2E4D8]/60 uppercase">
            An AI Marketing Studio
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Inter'] text-sm font-bold text-[#F2E4D8] hover:text-[#E893AC] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="hidden md:inline-flex text-xs bg-[#E893AC] text-[#20262A] px-7 py-3 rounded-[10px] hover:opacity-90 transition-opacity leading-none uppercase"
        >
          Book a Call
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F2E4D8] hover:text-[#E893AC] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#20262A] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-['Inter'] text-sm font-bold text-[#F2E4D8] hover:text-[#E893AC] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-xs bg-[#E893AC] text-[#20262A] px-7 py-3 rounded-[10px] text-center hover:opacity-90 transition-opacity uppercase"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
