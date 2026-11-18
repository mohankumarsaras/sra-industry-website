import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import { companyDetails } from '../data/companyData';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative pt-8 sm:pt-14 lg:pt-16 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-sky-300 text-black text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-[0_4px_14px_rgba(56,189,248,0.25)] mx-auto lg:mx-0 max-w-full truncate"
            >
              <Cog className="w-4 h-4 text-sky-500 animate-spin shrink-0" style={{ animationDuration: '6s' }} />
              <span className="font-mono truncate">BM SERIES • MINERAL GRINDING MACHINERY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15] sm:leading-[1.12] font-heading"
            >
              RAYMOND ROLLER <br className="hidden sm:inline" />
              <span className="text-black">
                MILL MACHINES
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-black leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0"
            >
              {companyDetails.description} Standard models engineered in multiple configurations (BM3, BM4, BM6, BM8) spanning capacities from 100 kg/hr to 12 tons/hr.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
            >
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
                  View BM Series Models
                </Button>
              </Link>
              <Button size="lg" variant="secondary" icon={ChevronRight} onClick={() => openQuoteModal('BM4')} className="w-full sm:w-auto">
                Request Quotation / RFQ
              </Button>
            </motion.div>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-black text-black font-mono"
            >
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-sky-200 shadow-[0_4px_12px_rgba(56,189,248,0.2)]">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                GSTIN: {companyDetails.gstin}
              </span>
              <a
                href={`tel:${companyDetails.mobile}`}
                className="flex items-center gap-1.5 bg-white text-black px-3.5 py-2 rounded-xl border border-sky-300 hover:border-sky-500 transition-all shadow-[0_4px_12px_rgba(56,189,248,0.2)]"
              >
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                Direct: {companyDetails.phoneDisplay}
              </a>
            </motion.div>
          </div>

          {/* Machine Photo Card with Sky Blue Shadows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <GlassCard glow className="p-3 shadow-[0_20px_40px_-5px_rgba(14,165,233,0.3)] border-sky-200">
              <div className="relative rounded-xl overflow-hidden border border-sky-200 group">
                <img
                  src="/catalogue/image4.jpg"
                  alt="SRA Industries Raymond Roller Mill Mineral Grinding Plant"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded bg-sky-400 text-black font-extrabold inline-block mb-1 sm:mb-1.5 shadow-sm">
                    Original Plant Installation
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">Raymond-Type Mineral Grinding Mill Plant</h3>
                  <p className="text-xs text-slate-200">BM Series complete turnkey grinding assembly</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
