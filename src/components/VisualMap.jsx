import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, School, Train, Bus, ShoppingCart, Home } from 'lucide-react';

const VisualMap = () => {
  const landmarks = [
    { name: "Manduwala Chowk", dist: "200m", icon: MapPin, x: "50%", y: "15%", delay: 0.1 },
    { name: "Dolphin College", dist: "800m", icon: School, x: "15%", y: "25%", delay: 0.2 },
    { name: "Dev Bhoomi Univ", dist: "1.2km", icon: School, x: "85%", y: "30%", delay: 0.3 },
    { name: "Nearest Market", dist: "600m", icon: ShoppingCart, x: "20%", y: "70%", delay: 0.4 },
    { name: "UPES Manduwala", dist: "4.5km", icon: School, x: "80%", y: "75%", delay: 0.5 },
    { name: "Railway Station", dist: "10km", icon: Train, x: "40%", y: "90%", delay: 0.6 },
    { name: "ISBT Bus Stand", dist: "12km", icon: Bus, x: "65%", y: "85%", delay: 0.7 },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            NETWORK & PROXIMITY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white"
          >
            Connected to the <span className="italic text-primary">Heart of Dehradun</span>
          </motion.h2>
        </div>

        {/* The Visual Map Canvas */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:aspect-[21/9] bg-slate-50 dark:bg-slate-900/50 rounded-[60px] border border-slate-100 dark:border-slate-800 p-8 shadow-inner overflow-hidden">
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Central Point: Ravi's Elite PG */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] relative z-10">
                <Home size={40} className="text-white" />
              </div>
              {/* Pulse Effects */}
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20 scale-150"></div>
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-10 scale-[2]"></div>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap">
                <span className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl">Ravi's Elite PG</span>
              </div>
            </motion.div>
          </div>

          {/* Connection Lines & Landmarks */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {landmarks.map((loc, index) => (
              <motion.line
                key={`line-${index}`}
                x1="50%"
                y1="50%"
                x2={loc.x}
                y2={loc.y}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/20 dark:text-primary/10"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: loc.delay }}
              />
            ))}
          </svg>

          {/* Landmark Points */}
          {landmarks.map((loc, index) => (
            <div 
              key={`point-${index}`}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: loc.x, top: loc.y }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: loc.delay + 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Distance Label on Line (Hover) */}
                <div className="mb-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm transition-all group-hover:scale-110 group-hover:border-primary">
                  <span className="text-[10px] font-black text-primary uppercase">{loc.dist}</span>
                </div>

                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                  <loc.icon size={24} />
                </div>
                
                <span className="mt-2 text-[11px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {loc.name}
                </span>
              </motion.div>
            </div>
          ))}

          {/* Corner Decorations */}
          <div className="absolute bottom-8 left-8 flex items-center space-x-3 text-slate-400">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">Live Connection Map</span>
          </div>
        </div>

        {/* Legend/Key */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
          <div className="flex items-center space-x-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            <div className="w-10 h-1 bg-primary/20 border-t-2 border-dashed border-primary" />
            <span>Direct Route</span>
          </div>
          <div className="flex items-center space-x-2 text-sm font-bold text-slate-500 dark:text-slate-400">
            <div className="w-4 h-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary">
              <School size={10} />
            </div>
            <span>Educational Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualMap;
