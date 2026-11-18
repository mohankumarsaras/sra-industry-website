import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import { bmSeriesComparison, capacityDisclaimer } from '../data/companyData';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function ServicesPreviewSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Product Lineup"
          title="BM Series – Raymond Roller Mill Models"
          subtitle="Explore the 4 standardized machine configurations engineered for precise mineral grinding from pilot batches to large industrial output."
          align="center"
        />

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bmSeriesComparison.map((item, index) => (
            <motion.div
              key={item.model}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <GlassCard interactive glow className="w-full flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-black font-heading">
                      {item.model}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-black border border-sky-300">
                      {item.rollerConfiguration}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm mb-6">
                    <div className="flex justify-between items-center border-b border-sky-100 pb-1.5">
                      <span className="text-black/70 font-semibold">Roll Size:</span>
                      <span className="font-bold text-black font-mono">{item.rollSize}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-sky-100 pb-1.5">
                      <span className="text-black/70 font-semibold">Bull Ring Size:</span>
                      <span className="font-bold text-black font-mono">{item.bullRingSize}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-sky-100 pb-1.5">
                      <span className="text-black/70 font-semibold">Application:</span>
                      <span className="font-bold text-black">{item.application}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 shadow-sm mb-4">
                    <span className="text-[10px] sm:text-xs text-black/70 font-mono uppercase tracking-wider block mb-1 font-bold">
                      Production Capacity
                    </span>
                    <span className="text-sm sm:text-base font-black text-black block font-heading">
                      {item.capacity}
                    </span>
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <p className="text-[11px] sm:text-xs text-black/80 mb-4 italic font-medium min-h-[2rem] flex items-center">
                    {item.popularFor}
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full flex items-center justify-center py-2.5 px-3"
                    icon={ArrowRight}
                    onClick={() => openQuoteModal(item.model)}
                  >
                    <span>Get Quote For {item.model}</span>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Capacity Disclaimer Note */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sky-200 text-xs sm:text-sm text-black leading-relaxed text-center max-w-4xl mx-auto mb-10 shadow-[0_4px_16px_rgba(14,165,233,0.15)] font-medium">
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
