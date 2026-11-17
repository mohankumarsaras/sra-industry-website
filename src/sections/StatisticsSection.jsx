import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';

export default function StatisticsSection() {
  const verifiedCatalogueStats = [
    {
      metric: 'BM3 – BM8',
      label: 'Standard Model Range',
      detail: 'Offered in 4 distinct roller and bull ring configurations',
    },
    {
      metric: '3 & 4 Rollers',
      label: 'Roller Configurations',
      detail: '12-inch and 20-inch precision roll sizes',
    },
    {
      metric: '880 – 1700 mm',
      label: 'Bull Ring Diameters',
      detail: 'Heavy-duty wear-resistant bull ring sizes',
    },
    {
      metric: '100 kg – 12 T/hr',
      label: 'Production Capacities',
      detail: 'From pilot grinding to large-scale mineral processing',
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-[#00ffcc] text-xs font-mono uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 text-[#05d9ff]" />
            BM Series Technical Scope
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
            Verified Catalogue Engineering Parameters
          </h2>
          <p className="text-sm text-slate-700 mt-2 font-medium">
            Exact machine parameters as manufactured and supplied by SRA Industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedCatalogueStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full flex flex-col justify-between py-8 px-6">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading mb-2">
                    {item.metric}
                  </span>
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-200">
                  {item.detail}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
