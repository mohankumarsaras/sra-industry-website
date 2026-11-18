import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { companyDetails } from '../data/companyData';
import SectionHeading from '../components/common/SectionHeading';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    millModel: 'BM4',
    mineralType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address.';
    }

    if (!formData.mobile.trim()) errs.mobile = 'Contact phone number is required.';
    if (!formData.message.trim()) errs.message = 'Please specify your mineral grinding requirement or target mesh.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Direct Factory Contact"
          title="CONTACT SRA INDUSTRIES"
          subtitle="Get in touch for quotations, machine specifications, and plant feasibility for BM Series Raymond Roller Mills."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Verified Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glow className="p-8 space-y-6 bg-white border border-sky-200 shadow-[0_12px_30px_-3px_rgba(14,165,233,0.2)]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-black text-xs font-mono font-black uppercase tracking-wider border border-sky-300">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                Verified Catalogue Details
              </div>

              <h3 className="text-2xl font-bold text-black font-heading">
                SRA INDUSTRIES
              </h3>

              <div className="space-y-4 text-sm text-black">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-400 text-black shrink-0 shadow-md">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-black/70 font-mono font-bold block">Direct Mobile / WhatsApp</span>
                    <a href={`tel:${companyDetails.mobile}`} className="text-base font-black text-black hover:text-sky-600 font-mono transition-colors">
                      {companyDetails.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-400 text-black shrink-0 shadow-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-black/70 font-mono font-bold block">Email Address</span>
                    <a href={`mailto:${companyDetails.email}`} className="text-sm font-black text-black hover:text-sky-600 transition-colors">
                      {companyDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-400 text-black shrink-0 shadow-md">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-black/70 font-mono font-bold block">Official Website</span>
                    <span className="text-sm font-black text-black font-mono">
                      {companyDetails.website}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-400 text-black shrink-0 shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-black/70 font-mono font-bold block">Registered Office</span>
                    <span className="text-xs font-bold text-black block mt-0.5">
                      {companyDetails.office}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-400 text-black shrink-0 shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-black/70 font-mono font-bold block">Factory / Works</span>
                    <span className="text-xs font-bold text-black block mt-0.5">
                      {companyDetails.factory}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-100">
                <span className="text-xs font-mono text-black font-bold block">
                  Tax Registration: <strong className="text-black">{companyDetails.gstin}</strong>
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 bg-white border border-sky-200 shadow-[0_12px_30px_-3px_rgba(14,165,233,0.2)]">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black font-heading">
                    Enquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-black max-w-md mx-auto font-medium">
                    Thank you, <strong className="text-black">{formData.fullName}</strong>. SRA Industries has received your message. You can also reach our technical sales team directly at <span className="font-mono font-bold text-black">{companyDetails.mobile}</span>.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="text-xl font-bold text-black font-heading">
                      Request BM Series Machinery Quotation
                    </h3>
                    <p className="text-xs text-black/70 mt-1 font-medium">
                      Send your mineral type and required capacity for an exact machine recommendation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1.5 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium shadow-sm"
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1 font-bold">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1.5 font-mono">
                        Contact Mobile *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium shadow-sm"
                      />
                      {errors.mobile && <p className="text-xs text-red-600 mt-1 font-bold">{errors.mobile}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1.5 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium shadow-sm"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1 font-bold">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1.5 font-mono">
                        Target Mill Model
                      </label>
                      <select
                        name="millModel"
                        value={formData.millModel}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 font-medium shadow-sm"
                      >
                        <option value="BM3">BM3 (3 Rollers • 12" • 100 kg - 1.5 T/hr)</option>
                        <option value="BM4">BM4 (4 Rollers • 12" • 300 kg - 2.5 T/hr)</option>
                        <option value="BM6">BM6 (3 Rollers • 20" • 1 - 8 T/hr)</option>
                        <option value="BM8">BM8 (4 Rollers • 20" • 2 - 12 T/hr)</option>
                        <option value="general">Consultation for Best Model</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black uppercase tracking-wider mb-1.5 font-mono">
                      Mineral Type & Target Fineness / Mesh *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify mineral (e.g. Calcite, Dolomite, Barite, Limestone, Gypsum), feed size, moisture %, and required output mesh..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 font-medium shadow-sm"
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-600 mt-1 font-bold">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={Send}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Submit Quotation Request'}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </div>
  );
}
