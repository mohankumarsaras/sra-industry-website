import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import { companyDetails } from '../data/companyData';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
            >
              <Cog className="w-4 h-4 text-[#04b7d7] animate-spin" style={{ animationDuration: '6s' }} />
              <span>BM SERIES • MINERAL GRINDING MACHINERY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] font-heading"
            >
              RAYMOND ROLLER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-[#04829a] to-slate-900">
                MILL MACHINES
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-800 leading-relaxed max-w-2xl font-medium"
            >
              {companyDetails.description} Engineered in multiple configurations (BM3, BM4, BM6, BM8) from 100 kg to 12 tons per hour.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Link to="/services">
                <Button size="lg" variant="primary" icon={ArrowRight}>
                  View BM Series Models
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary" icon={ChevronRight}>
                  Request Quotation / RFQ
                </Button>
              </Link>
            </motion.div>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 font-mono"
            >
              <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                GSTIN: {companyDetails.gstin}
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-200">
                <Phone className="w-4 h-4 text-[#04b7d7]" />
                Call: {companyDetails.phoneDisplay}
              </span>
            </motion.div>
          </div>

          {/* Real Catalogue Machine Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <GlassCard glow className="p-3 shadow-xl">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 group">
                <img
                  src="/catalogue/image4.jpg"
                  alt="SRA Industries Raymond Roller Mill Mineral Grinding Plant"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded bg-[#05d9ff] text-slate-950 font-bold inline-block mb-1.5">
                    Original Plant Installation
                  </span>
                  <h3 className="text-base font-bold">Raymond-Type Mineral Grinding Mill Plant</h3>
                  <p className="text-xs text-slate-300">BM Series complete turnkey grinding assembly</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
