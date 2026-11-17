import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Home, Compass } from 'lucide-react';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full relative z-10">
        <GlassCard glow className="text-center p-8 sm:p-12 border-white/10">
          
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <span className="text-6xl sm:text-7xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mb-2">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
            Industrial Resource Not Located
          </h1>

          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto mb-8">
            The technical blueprint, product page, or URL directory you requested is unavailable or has been re-indexed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/">
              <Button variant="primary" icon={Home}>
                Return to Homepage
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="glass" icon={Compass}>
                View Services
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-xs text-slate-500 font-mono">
            Error Code: 404_PAGE_NOT_FOUND • SRA Systems
          </div>

        </GlassCard>
      </div>
    </div>
  );
}
