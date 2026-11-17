import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { companyDetails, navigationLinks } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800 mt-auto overflow-hidden">
      {/* Top accent line using theme colors */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#05d9ff] to-[#00ffcc]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Brief */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#00ffcc] shadow-md">
                <Cog className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight font-heading">
                SRA INDUSTRIES
              </span>
            </div>
            <p className="text-xs text-[#00ffcc] font-mono font-semibold uppercase tracking-wider">
              {companyDetails.seriesName} • {companyDetails.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {companyDetails.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#05d9ff]" />
                GSTIN: {companyDetails.gstin}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#00ffcc] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#05d9ff] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Machine Models */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 font-mono">
              BM Series Models
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="font-bold text-white">BM3</span>
                <span className="font-mono text-xs text-[#00ffcc]">3 Rollers • 12"</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="font-bold text-white">BM4</span>
                <span className="font-mono text-xs text-[#00ffcc]">4 Rollers • 12"</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="font-bold text-white">BM6</span>
                <span className="font-mono text-xs text-[#00ffcc]">3 Rollers • 20"</span>
              </li>
              <li className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="font-bold text-white">BM8</span>
                <span className="font-mono text-xs text-[#00ffcc]">4 Rollers • 20"</span>
              </li>
            </ul>
          </div>

          {/* Verified Official Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 font-mono">
              Factory & Office
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#05d9ff] shrink-0 mt-1" />
                <div className="text-xs leading-relaxed">
                  <span className="text-white font-semibold block">Office:</span>
                  {companyDetails.office}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00ffcc] shrink-0 mt-1" />
                <div className="text-xs leading-relaxed">
                  <span className="text-white font-semibold block">Factory:</span>
                  {companyDetails.factory}
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#05d9ff] shrink-0" />
                <a href={`tel:${companyDetails.mobile}`} className="font-bold text-white hover:text-[#00ffcc] font-mono text-xs">
                  {companyDetails.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00ffcc] shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="text-xs text-slate-300 hover:text-white">
                  {companyDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#05d9ff] shrink-0" />
                <span className="text-xs text-slate-400 font-mono">{companyDetails.website}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            GSTIN: {companyDetails.gstin} | Salem, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}
