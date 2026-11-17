import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Cog, Phone, ArrowUpRight } from 'lucide-react';
import { navigationLinks, companyDetails } from '../data/companyData';
import Button from '../components/common/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2.5'
          : 'bg-white/60 backdrop-blur-md border-b border-white/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl bg-slate-950 text-[#00ffcc] shadow-md border border-slate-800 transition-transform duration-300 group-hover:rotate-12">
              <Cog className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-950 font-heading">
                  SRA
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-[#00ffcc] font-mono tracking-wider">
                  INDUSTRIES
                </span>
              </div>
              <span className="text-[11px] tracking-wide text-slate-600 font-semibold">
                Raymond Roller Mill Machines
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-950 text-[#00ffcc] shadow-sm'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Direct Call CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyDetails.mobile}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-800 px-3 py-1.5 rounded-lg bg-white/70 border border-slate-200 hover:bg-white hover:border-[#05d9ff] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#05d9ff]" />
              <span>{companyDetails.phoneDisplay}</span>
            </a>
            <Link to="/contact">
              <Button size="sm" variant="primary" icon={ArrowUpRight}>
                Get Quote / RFQ
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-slate-950 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-2xl shadow-xl space-y-3">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-slate-950 text-[#00ffcc]'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <a
              href={`tel:${companyDetails.mobile}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#05d9ff]" />
              <span>{companyDetails.phoneDisplay}</span>
            </a>
            <Link to="/contact">
              <Button variant="primary" className="w-full" icon={ArrowUpRight}>
                Get Quote / RFQ
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
