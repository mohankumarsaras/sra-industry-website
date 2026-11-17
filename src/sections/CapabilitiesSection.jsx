import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Factory, ShieldCheck } from 'lucide-react';
import { featuredCapabilities } from '../data/companyData';

const iconMap = {
  Cpu,
  Factory,
  ShieldCheck,
};

export default function CapabilitiesSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Engineered For Excellence
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Core Industrial Capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCapabilities.map((item, index) => {
            const Icon = iconMap[item.icon] || Factory;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
