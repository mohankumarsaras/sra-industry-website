import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone, Mail, ShieldCheck } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { companyDetails } from '../../data/companyData';
import Button from '../common/Button';

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, initialModel } = useQuoteModal();

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

  useEffect(() => {
    if (initialModel) {
      setFormData((prev) => ({ ...prev, millModel: initialModel }));
    }
  }, [initialModel]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address.';
    }

    if (!formData.mobile.trim()) errs.mobile = 'Mobile number is required.';
    if (!formData.message.trim()) {
      errs.message = 'Please specify mineral type or grinding requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuoteModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-sky-300 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.35)] overflow-hidden z-10 my-8"
          >
            {/* Top Bar Accent */}
            <div className="h-2 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 w-full" />

            {/* Close Button */}
            <button
              onClick={closeQuoteModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-black hover:bg-sky-100 hover:text-sky-700 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-black font-heading">
                    RFQ Received Successfully!
                  </h3>
                  <p className="text-sm text-black max-w-md mx-auto font-medium">
                    Thank you, <strong className="text-black">{formData.fullName}</strong>. SRA Industries has received your machinery request. Our applications engineer will follow up promptly.
                  </p>
                  <div className="pt-2 text-xs font-mono text-black font-bold">
                    Direct Factory Phone: <span className="text-sky-700">{companyDetails.mobile}</span>
                  </div>
                  <div className="pt-4">
                    <Button variant="secondary" size="md" onClick={closeQuoteModal}>
                      Close Window
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-black text-xs font-mono font-bold uppercase tracking-wider border border-sky-300 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                      Instant Technical Quotation
                    </div>
                    <h3 className="text-2xl font-extrabold text-black font-heading">
                      Request SRA Machinery Quotation (RFQ)
                    </h3>
                    <p className="text-xs text-black/70 mt-1 font-medium">
                      Fill out your mineral specifications below to get accurate pricing and sizing guidance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium"
                      />
                      {errors.fullName && <p className="text-xs text-red-600 mt-1 font-bold">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1 font-mono">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium"
                      />
                      {errors.mobile && <p className="text-xs text-red-600 mt-1 font-bold">{errors.mobile}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-medium"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1 font-bold">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-black text-black uppercase tracking-wider mb-1 font-mono">
                        Model Preference
                      </label>
                      <select
                        name="millModel"
                        value={formData.millModel}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 font-medium"
                      >
                        <option value="BM3">BM3 (3 Rollers • 12" • 100 kg - 1.5 T/hr)</option>
                        <option value="BM4">BM4 (4 Rollers • 12" • 300 kg - 2.5 T/hr)</option>
                        <option value="BM6">BM6 (3 Rollers • 20" • 1 - 8 T/hr)</option>
                        <option value="BM8">BM8 (4 Rollers • 20" • 2 - 12 T/hr)</option>
                        <option value="consultation">Recommend Best Fit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-black uppercase tracking-wider mb-1 font-mono">
                      Mineral Type & Target Fineness / Mesh *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Grinding Calcite, Dolomite, Barite or Limestone to 300 mesh at 2 tons/hr..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-black text-sm focus:outline-none focus:border-sky-500 font-medium"
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-600 mt-1 font-bold">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-black/70 font-mono">
                      <Phone className="w-3.5 h-3.5 text-sky-500" />
                      <span>{companyDetails.phoneDisplay}</span>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={Send}
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Transmitting RFQ...' : 'Submit Technical RFQ'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
