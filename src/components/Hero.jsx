import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const Hero = ({ onBook }) => {
  return (
    <section id="home" className="relative h-[95vh] w-full overflow-hidden rounded-b-[60px] md:rounded-b-[100px]">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110 animate-slow-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-8 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
        >
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <span className="text-sm font-bold tracking-widest uppercase">Verified Premium PG in Dehradun</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold font-heading mb-8 leading-[1.1] max-w-5xl"
        >
          Luxury Living for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Everyone</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl font-light leading-relaxed"
        >
          Experience safety, comfort, and a vibrant community in the heart of Dehradun. Designed specifically for ambitious students and working professionals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <button 
            onClick={() => onBook('single')}
            className="btn-primary px-12 py-5 text-xl font-bold shadow-2xl shadow-primary/40"
          >
            Book Your Space
          </button>
          <a href="#gallery" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-slate-900 text-xl">
            Virtual Tour
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 hidden md:block">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold`}>
              {i === 4 ? "200+" : ""}
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm mt-3 ml-2 font-medium">Join 200+ happy residents</p>
      </div>
    </section>
  );
};

export default Hero;
