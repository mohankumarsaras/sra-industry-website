import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import { companyDetails } from '../data/companyData';

export default function CompanyIntroSection() {
  const highlights = [
    'BM Series Raymond-type roller mills engineered in 3-Roller & 4-Roller setups',
    'Capacities spanning from 100 kg/hr (pilot/small) up to 12 tons/hr (large commercial)',
    'Precision-machined internal gear assemblies and heavy cast mill housing components',
    'Customized roller mill selection matching specific mineral hardness and target mesh fineness',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Real Catalogue Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/catalogue/image5.jpg"
                  alt="Gear assembly close-up view SRA Industries"
                  className="w-full h-48 object-cover"
                />
                <div className="p-2.5 bg-white text-[11px] font-bold text-slate-800 text-center font-mono border-t border-slate-100">
                  Gear Assembly – Close-Up
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/catalogue/image6.jpg"
                  alt="Gear assembly overall view SRA Industries"
                  className="w-full h-48 object-cover"
                />
                <div className="p-2.5 bg-white text-[11px] font-bold text-slate-800 text-center font-mono border-t border-slate-100">
                  Gear Assembly – Overall View
                </div>
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/catalogue/image7.jpg"
                  alt="Machined mill housing component SRA Industries"
                  className="w-full h-52 object-cover"
                />
                <div className="p-2.5 bg-white text-[11px] font-bold text-slate-800 text-center font-mono border-t border-slate-100">
                  Machined Mill Housing / Component
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#05d9ff] animate-pulse" />
              About SRA Industries
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight font-heading">
              Industrial Mineral Grinding Solutions
            </h2>

            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              {companyDetails.description}
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/about">
                <Button variant="primary" icon={ArrowRight}>
                  Company Profile & Works
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
