import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sliders, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import { typicalApplications } from '../data/companyData';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Industrial Use Cases"
          title="Typical Applications"
          subtitle="Engineered to meet particle size reduction demands for diverse mineral processing operations."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {typicalApplications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard interactive className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-[#00ffcc] flex items-center justify-center mb-6 shadow-md border border-slate-800">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3 font-heading">
                    {app.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {app.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                    BM Series Application
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
