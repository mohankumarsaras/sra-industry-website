import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Gauge, Sliders } from 'lucide-react';
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
                    <span className="text-2xl font-extrabold text-slate-950 font-heading">
                      {item.model}
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-[#00ffcc]">
                      {item.rollerConfiguration}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs mb-6">
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="text-slate-600 font-medium">Roll Size:</span>
                      <span className="font-bold text-slate-950 font-mono">{item.rollSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="text-slate-600 font-medium">Bull Ring Size:</span>
                      <span className="font-bold text-slate-950 font-mono">{item.bullRingSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="text-slate-600 font-medium">Application:</span>
                      <span className="font-bold text-slate-950">{item.application}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm mb-4">
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block mb-1">
                      Production Capacity
                    </span>
                    <span className="text-sm font-extrabold text-slate-950 block font-heading">
                      {item.capacity}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-slate-600 mb-4 italic">
                    {item.popularFor}
                  </p>
                  <Link to="/services">
                    <Button variant="outline" size="sm" className="w-full">
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
        <div className="p-4 rounded-xl bg-white/70 border border-slate-200 text-xs text-slate-700 leading-relaxed text-center max-w-4xl mx-auto mb-10 shadow-sm">
          <span className="font-bold text-slate-900">Note: </span>
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
