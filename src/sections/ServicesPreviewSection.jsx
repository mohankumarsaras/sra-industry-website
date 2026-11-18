import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import { bmSeriesComparison, capacityDisclaimer } from '../data/companyData';

export default function ServicesPreviewSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Product Lineup"
          title="BM Series – Raymond Roller Mill Models"
          subtitle="Explore the 4 standardized machine configurations engineered for precise mineral grinding from pilot batches to large industrial output."
          align="center"
        />

        {/* 4 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {bmSeriesComparison.map((item, index) => (
            <motion.div
              key={item.model}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard interactive glow className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-black font-heading">
                      {item.model}
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-black border border-sky-300">
                      {item.rollerConfiguration}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs mb-6">
                    <div className="flex justify-between border-b border-sky-100 pb-1.5">
                      <span className="text-black/70 font-semibold">Roll Size:</span>
                      <span className="font-bold text-black font-mono">{item.rollSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-sky-100 pb-1.5">
                      <span className="text-black/70 font-semibold">Bull Ring Size:</span>
                      <span className="font-bold text-black font-mono">{item.bullRingSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-sky-100 pb-1.5">
                      <span className="text-black/70 font-semibold">Application:</span>
                      <span className="font-bold text-black">{item.application}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 shadow-sm mb-4">
                    <span className="text-[10px] text-black/70 font-mono uppercase tracking-wider block mb-1 font-bold">
                      Production Capacity
                    </span>
                    <span className="text-sm font-black text-black block font-heading">
                      {item.capacity}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-black/80 mb-4 italic font-medium">
                    {item.popularFor}
                  </p>
                  <Link to="/services">
                    <Button variant="secondary" size="sm" className="w-full">
                      Full Specs
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Capacity Disclaimer Note */}
        <div className="p-5 rounded-2xl bg-white border border-sky-200 text-xs text-black leading-relaxed text-center max-w-4xl mx-auto mb-10 shadow-[0_4px_16px_rgba(14,165,233,0.15)] font-medium">
          <span className="font-extrabold text-black">Note: </span>
          {capacityDisclaimer}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Compare Complete BM Series Specifications
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
