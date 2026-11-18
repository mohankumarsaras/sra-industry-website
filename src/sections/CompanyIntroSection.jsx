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
              <div className="rounded-2xl overflow-hidden border border-sky-200 shadow-[0_8px_20px_-3px_rgba(14,165,233,0.2)] bg-white">
                <img
                  src="/catalogue/image5.jpg"
                  alt="Gear assembly close-up view SRA Industries"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white text-xs font-black text-black text-center font-mono border-t border-sky-100">
                  Gear Assembly – Close-Up
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-sky-200 shadow-[0_8px_20px_-3px_rgba(14,165,233,0.2)] bg-white">
                <img
                  src="/catalogue/image6.jpg"
                  alt="Gear assembly overall view SRA Industries"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-white text-xs font-black text-black text-center font-mono border-t border-sky-100">
                  Gear Assembly – Overall View
                </div>
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden border border-sky-200 shadow-[0_12px_24px_-4px_rgba(14,165,233,0.25)] bg-white">
                <img
                  src="/catalogue/image7.jpg"
                  alt="Machined mill housing component SRA Industries"
                  className="w-full h-52 object-cover"
                />
                <div className="p-3 bg-white text-xs font-black text-black text-center font-mono border-t border-sky-100">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-300 text-black text-xs font-extrabold uppercase tracking-wider shadow-[0_4px_12px_rgba(56,189,248,0.2)]">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              About SRA Industries
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight font-heading">
              Industrial Mineral Grinding Solutions
            </h2>

            <p className="text-black text-base sm:text-lg leading-relaxed font-normal">
              {companyDetails.description}
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-black font-semibold">{item}</span>
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
