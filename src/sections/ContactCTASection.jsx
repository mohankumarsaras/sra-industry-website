import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import { companyDetails } from '../data/companyData';

export default function ContactCTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlassCard glow className="p-8 sm:p-12 bg-white/90 border border-slate-300 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-[#00ffcc] text-xs font-mono uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Contact SRA Industries Directly
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading leading-tight">
                Inquire For Raymond Roller Mill Requirements
              </h2>

              <p className="text-slate-700 text-base leading-relaxed max-w-2xl font-medium">
                Reach out to SRA Industries with your mineral type, required output mesh (fineness), feed size, and hourly target capacity to get the best-fit BM Series model recommendation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-800 font-mono font-bold">
                <a href={`tel:${companyDetails.mobile}`} className="flex items-center gap-1.5 hover:text-cyan-700">
                  <Phone className="w-3.5 h-3.5 text-[#04b7d7]" />
                  <span>{companyDetails.phoneDisplay}</span>
                </a>
                <span>•</span>
                <a href={`mailto:${companyDetails.email}`} className="flex items-center gap-1.5 hover:text-cyan-700">
                  <Mail className="w-3.5 h-3.5 text-[#04b7d7]" />
                  <span>{companyDetails.email}</span>
                </a>
                <span>•</span>
                <span>GSTIN: {companyDetails.gstin}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full" icon={ArrowRight}>
                  Request Price Quotation
                </Button>
              </Link>
              <a href={`tel:${companyDetails.mobile}`}>
                <Button variant="secondary" size="lg" className="w-full" icon={Phone}>
                  Call Factory Directly
                </Button>
              </a>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
