import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Wifi, Trash2, Droplets 
} from 'lucide-react';

const AmenityItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:border-primary/30 dark:hover:border-primary/30 transition-all group"
  >
    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold font-heading mb-3 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Amenities = () => {
  const amenities = [
    { icon: Camera, title: "CCTV Surveillance", description: "24/7 high-definition monitoring for complete peace of mind." },
    { icon: Wifi, title: "Giga WiFi", description: "Uninterrupted high-speed fiber internet in all areas." },
    { icon: Trash2, title: "Auto Laundry", description: "Full-service washing, drying & steam ironing on-site." },
    { icon: Droplets, title: "24/7 RO Water", description: "Centralized RO purification & instant hot water." }
  ];

  return (
    <section id="amenities" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/3">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">WHY US?</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-8 leading-tight">
              Hospitality that <br /><span className="text-primary italic">Feels Like Home</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
              We go beyond providing a room. We create an environment where you can thrive, succeed, and feel safe every single day.
            </p>
            <div className="p-8 bg-offWhite dark:bg-slate-900 rounded-[30px] border border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span className="font-bold text-slate-800 dark:text-white uppercase tracking-tighter">Verified Property</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Ravi's Elite PG is a RERA registered and police-verified accommodation provider in Dehradun.</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, index) => (
              <AmenityItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
