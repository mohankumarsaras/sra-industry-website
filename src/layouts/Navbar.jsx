import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { navigationLinks, companyDetails } from '../data/companyData';
import Button from '../components/common/Button';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-sky-200 shadow-[0_4px_20px_rgba(14,165,233,0.15)] py-2.5'
          : 'bg-white/90 backdrop-blur-md border-b border-sky-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Primary PNG Logo */}
          <Link to="/" className="flex items-center gap-3 group" title="SRA Industries Home">
            <img
              src="/sra-logo-black-transparent.png"
              alt="SRA Industries Primary Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white border border-sky-200 shadow-[0_4px_12px_rgba(14,165,233,0.1)]">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs font-black tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-400 text-black shadow-[0_4px_12px_rgba(56,189,248,0.4)]'
                      : 'text-black hover:bg-sky-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Direct Call CTA & Popup Trigger */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyDetails.mobile}`}
              className="flex items-center gap-2 text-xs font-black text-black px-3.5 py-2 rounded-xl bg-white border border-sky-300 hover:border-sky-500 hover:bg-sky-50 transition-all shadow-[0_4px_12px_rgba(14,165,233,0.15)]"
            >
              <Phone className="w-3.5 h-3.5 text-sky-500" />
              <span>{companyDetails.phoneDisplay}</span>
            </a>
            
            {/* Opens Contact Modal Popup */}
            <Button
              size="sm"
              variant="primary"
              icon={ArrowUpRight}
              onClick={() => openQuoteModal('BM4')}
            >
              Get Quote / RFQ
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-sky-200 text-black hover:bg-sky-50 shadow-[0_4px_12px_rgba(14,165,233,0.15)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white border border-sky-200 shadow-2xl space-y-3">
          <div className="pb-2 border-b border-sky-100 flex items-center justify-between">
            <img
              src="/sra-logo-black-transparent.png"
              alt="SRA Industries Primary Logo"
              className="h-9 w-auto object-contain"
            />
          </div>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-black transition-all ${
                  isActive
                    ? 'bg-sky-400 text-black'
                    : 'text-black hover:bg-sky-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-sky-100 space-y-2">
            <a
              href={`tel:${companyDetails.mobile}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-50 text-black font-black text-sm border border-sky-200"
            >
              <Phone className="w-4 h-4 text-sky-500" />
              <span>{companyDetails.phoneDisplay}</span>
            </a>
            <Button
              variant="primary"
              className="w-full"
              icon={ArrowUpRight}
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal('BM4');
              }}
            >
              Get Quote / RFQ
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
