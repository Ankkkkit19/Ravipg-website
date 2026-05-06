import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center"
    >
      <div className="relative w-24 h-24 mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white font-heading">R</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-white/60 tracking-[0.2em] font-medium text-sm"
      >
        RAVI'S ELITE
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
