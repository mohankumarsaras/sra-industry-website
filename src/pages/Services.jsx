import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cog, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Layers, 
  Phone, 
  Mail, 
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
            className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
              selectedModel === 'all'
                ? 'bg-slate-950 text-[#00ffcc] shadow-md border border-slate-900'
                : 'bg-white/80 text-slate-700 border border-slate-200 hover:bg-white'
            }`}
          >
            All Models (BM3, BM4, BM6, BM8)
          </button>
          {bmSeriesComparison.map((m) => (
            <button
              key={m.model}
              onClick={() => setSelectedModel(m.model)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                selectedModel === m.model
                  ? 'bg-slate-950 text-[#00ffcc] shadow-md border border-slate-900'
                  : 'bg-white/80 text-slate-700 border border-slate-200 hover:bg-white'
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
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                    <div>
                      <h3 className="text-3xl font-extrabold text-slate-950 font-heading">
                        {item.model}
                      </h3>
                      <span className="text-xs text-slate-600 font-medium">
                        Raymond-Type Roller Mill
                      </span>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-lg bg-slate-950 text-[#00ffcc] text-xs font-bold font-mono">
                      {item.rollerConfiguration}
                    </span>
                  </div>

                  {/* Specification Table */}
                  <div className="space-y-3.5 text-sm mb-6">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Roller Configuration</span>
                      <span className="font-bold text-slate-950 font-mono">{item.rollerConfiguration}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Roll Size</span>
                      <span className="font-bold text-slate-950 font-mono">{item.rollSize}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Bull Ring Size</span>
                      <span className="font-bold text-slate-950 font-mono">{item.bullRingSize}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Production Capacity</span>
                      <span className="font-extrabold text-slate-950 font-mono text-cyan-800">{item.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">Application</span>
                      <span className="font-bold text-slate-950">{item.application}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
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
        <div className="p-6 rounded-2xl bg-white/90 border border-slate-300 shadow-sm max-w-4xl mx-auto mb-20 text-slate-800 text-sm leading-relaxed">
          <h4 className="font-bold text-slate-950 mb-1 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#04b7d7]" />
            Operating Capacity Guidance
          </h4>
          <p>{capacityDisclaimer}</p>
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
                <div className="rounded-xl overflow-hidden border border-slate-200 h-64 mb-3">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h4 className="font-bold text-slate-950 text-sm mb-1">{img.title}</h4>
                <p className="text-xs text-slate-600">{img.caption}</p>
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
