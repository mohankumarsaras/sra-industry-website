import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import QuoteModal from '../components/common/QuoteModal';
import { QuoteModalProvider } from '../context/QuoteModalContext';

export default function MainLayout() {
  const location = useLocation();

  return (
    <QuoteModalProvider>
      <div className="flex flex-col min-h-screen bg-[#f0f9ff] text-black">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        {/* Contact/Quote Modal Popup */}
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}
