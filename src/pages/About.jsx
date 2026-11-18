import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight 
} from 'lucide-react';
import { companyDetails, catalogueGallery } from '../data/companyData';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function About() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Company Profile"
          title="ABOUT SRA INDUSTRIES"
          subtitle="Manufacturer and supplier of machinery and components for mineral grinding and allied industrial applications."
          align="center"
        />

        {/* Narrative & Factory Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-300 text-black text-xs font-mono font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(56,189,248,0.2)]">
              <Building2 className="w-3.5 h-3.5 text-sky-500" />
              Manufacturing & Supply
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-heading leading-tight">
              BM Series Raymond-Type Roller Mills
            </h2>

            <p className="text-black text-base leading-relaxed font-normal">
              {companyDetails.description}
            </p>

            <p className="text-black/85 text-sm leading-relaxed">
              Based in Salem, Tamil Nadu, SRA Industries specializes in the end-to-end design, precision fabrication of internal gear assemblies, casting of durable mill housings, and supply of robust Raymond-type mineral pulverizing mills for diverse industrial mineral sectors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-[0_8px_20px_-3px_rgba(14,165,233,0.18)]">
                <span className="text-xs text-black/70 font-mono font-bold block">Registered Office</span>
                <span className="text-xs font-bold text-black block mt-1">
                  {companyDetails.office}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-[0_8px_20px_-3px_rgba(14,165,233,0.18)]">
                <span className="text-xs text-black/70 font-mono font-bold block">Works / Factory</span>
                <span className="text-xs font-bold text-black block mt-1">
                  {companyDetails.factory}
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-black">
              <span className="px-3.5 py-2 rounded-xl bg-white border border-sky-200 shadow-[0_4px_12px_rgba(14,165,233,0.15)]">
                GSTIN: {companyDetails.gstin}
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white text-black border border-sky-300 shadow-[0_4px_12px_rgba(14,165,233,0.15)]">
                Direct: {companyDetails.phoneDisplay}
              </span>
            </div>
          </motion.div>

          {/* Official Factory Board Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <GlassCard glow className="p-3 shadow-[0_20px_40px_-5px_rgba(14,165,233,0.25)] border-sky-200">
              <div className="relative rounded-xl overflow-hidden border border-sky-200">
                <img
                  src="/sra-factory-board.jpg"
                  alt="SRA Industries Factory Signboard - Engineering Excellence"
                  className="w-full h-auto object-cover rounded-lg shadow-sm"
                />
                <div className="p-3 bg-white text-xs font-black text-black text-center font-mono border-t border-sky-100">
                  SRA Industries Factory & Works Board
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Machine & Component Photographs Showcase */}
        <div className="mb-20">
          <SectionHeading
            badge="Actual Industrial Components"
            title="MACHINE & COMPONENT PHOTOGRAPHS"
            subtitle="The following photographs show Raymond-type mill plant examples and actual industrial components supplied or used in the BM Series range."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogueGallery.slice(0, 4).map((item) => (
              <GlassCard key={item.id} interactive className="p-3 flex flex-col justify-between">
                <div className="relative rounded-xl overflow-hidden border border-sky-200 h-52 mb-3 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-sky-400 text-black text-[10px] font-mono font-black shadow-md">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black mb-1">{item.title}</h4>
                  <p className="text-xs text-black/70 font-medium">{item.caption}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA with Quote Modal popup trigger */}
        <div className="text-center">
          <Button variant="primary" size="lg" icon={ArrowRight} onClick={() => openQuoteModal('BM4')}>
            Request Factory Quotation
          </Button>
        </div>

      </div>
    </div>
  );
}
