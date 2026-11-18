import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sliders, 
  FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { bmSeriesComparison, capacityDisclaimer, catalogueGallery } from '../data/companyData';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';

export default function Services() {
  const [selectedModel, setSelectedModel] = useState('all');

  const filteredModels = selectedModel === 'all'
    ? bmSeriesComparison
    : bmSeriesComparison.filter(m => m.model === selectedModel);

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Product Catalogue"
          title="BM SERIES – MODEL COMPARISON & MACHINE SPECIFICATIONS"
          subtitle="Explore the complete Raymond Roller Mill machine line manufactured by SRA Industries for industrial mineral grinding applications."
          align="center"
        />

        {/* Model Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedModel('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-black tracking-wide transition-all cursor-pointer ${
              selectedModel === 'all'
                ? 'bg-sky-400 text-black shadow-[0_4px_16px_rgba(56,189,248,0.4)] border border-sky-300'
                : 'bg-white text-black border border-sky-200 hover:border-sky-400 shadow-sm'
            }`}
          >
            All Models (BM3, BM4, BM6, BM8)
          </button>
          {bmSeriesComparison.map((m) => (
            <button
              key={m.model}
              onClick={() => setSelectedModel(m.model)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black tracking-wide transition-all cursor-pointer ${
                selectedModel === m.model
                  ? 'bg-sky-400 text-black shadow-[0_4px_16px_rgba(56,189,248,0.4)] border border-sky-300'
                  : 'bg-white text-black border border-sky-200 hover:border-sky-400 shadow-sm'
              }`}
            >
              Model {m.model}
            </button>
          ))}
        </div>

        {/* Machine Specifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredModels.map((item, index) => (
            <motion.div
              key={item.model}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard glow className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-sky-100 mb-6">
                    <div>
                      <h3 className="text-3xl font-extrabold text-black font-heading">
                        {item.model}
                      </h3>
                      <span className="text-xs text-black/70 font-semibold">
                        Raymond-Type Roller Mill
                      </span>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-lg bg-sky-100 text-black text-xs font-black font-mono border border-sky-300">
                      {item.rollerConfiguration}
                    </span>
                  </div>

                  {/* Specification Table */}
                  <div className="space-y-3.5 text-sm mb-6">
                    <div className="flex justify-between items-center py-1.5 border-b border-sky-50">
                      <span className="text-black/70 font-medium">Roller Configuration</span>
                      <span className="font-bold text-black font-mono">{item.rollerConfiguration}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-sky-50">
                      <span className="text-black/70 font-medium">Roll Size</span>
                      <span className="font-bold text-black font-mono">{item.rollSize}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-sky-50">
                      <span className="text-black/70 font-medium">Bull Ring Size</span>
                      <span className="font-bold text-black font-mono">{item.bullRingSize}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-sky-50">
                      <span className="text-black/70 font-medium">Production Capacity</span>
                      <span className="font-black text-sky-700 font-mono text-base">{item.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-sky-50">
                      <span className="text-black/70 font-medium">Application</span>
                      <span className="font-bold text-black">{item.application}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sky-100 flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button variant="primary" size="md" className="w-full" icon={ArrowRight}>
                      Inquire Model {item.model}
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Capacity Notes */}
        <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-[0_8px_25px_rgba(14,165,233,0.15)] max-w-4xl mx-auto mb-20 text-black text-sm leading-relaxed">
          <h4 className="font-bold text-black mb-1 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-sky-500" />
            Operating Capacity Guidance
          </h4>
          <p className="text-black/85 font-medium">{capacityDisclaimer}</p>
        </div>

        {/* Complete Component Gallery from Catalogue */}
        <div className="mb-16">
          <SectionHeading
            badge="Original Images"
            title="MACHINE & COMPONENT PHOTOGRAPHS"
            subtitle="Original catalogue photographs of Raymond-type mill installations and precision internal components."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogueGallery.map((img) => (
              <GlassCard key={img.id} interactive className="p-3">
                <div className="rounded-xl overflow-hidden border border-sky-200 h-64 mb-3 bg-white">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h4 className="font-bold text-black text-sm mb-1">{img.title}</h4>
                <p className="text-xs text-black/70 font-medium">{img.caption}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button variant="primary" size="lg" icon={FileText}>
              Send Technical Enquiry For Mill Sizing
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
