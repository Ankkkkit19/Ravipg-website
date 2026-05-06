import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFab = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed md:bottom-10 bottom-28 right-6 md:right-10 z-40 flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-premium mb-4 border border-slate-100 dark:border-slate-700 max-w-[200px] relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium text-slate-800 dark:text-white leading-tight">
              Hi! I'm Ravi Shankar. How can I help you with your booking?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/918860228903?text=Hi Ravi Shankar, I want to book a room at your PG"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all relative group"
      >
        <MessageCircle size={32} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppFab;
