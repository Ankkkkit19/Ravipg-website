import React from 'react';
import { motion } from 'framer-motion';
import { Train, Plane, Bus, Car, ShoppingBag, MapPin } from 'lucide-react';

const LocationConnectivity = () => {
  const landmarks = [
    { name: "Nearest Market", distance: "600 m", icon: ShoppingBag, color: "bg-orange-500" },
    { name: "Auto Stand", distance: "2 km", icon: Car, color: "bg-blue-500" },
    { name: "Railway Station", distance: "10 km", icon: Train, color: "bg-indigo-500" },
    { name: "ISBT Bus Stand", distance: "12 km", icon: Bus, color: "bg-green-500" },
    { name: "Dehradun Airport", distance: "20 km", icon: Plane, color: "bg-sky-500" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            LOCATION & CONNECTIVITY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white"
          >
            Everything you need, <br /><span className="italic text-primary font-light">Within Your Reach</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {landmarks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[40px] bg-offWhite dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:border-primary transition-all duration-500"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                <item.icon size={30} />
              </div>
              <h4 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-tighter mb-2">{item.name}</h4>
              <p className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {item.distance}
              </p>
              
              {/* Decorative Map Pin */}
              <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                  <MapPin size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proximity Tip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 bg-primary/5 dark:bg-primary/10 rounded-[30px] border border-primary/10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6"
        >
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h5 className="text-xl font-bold text-slate-900 dark:text-white">Prime College Hub</h5>
              <p className="text-slate-600 dark:text-slate-400">Strategically located near DBUU, Dolphin PG College, and UPES (Manduwala).</p>
            </div>
          </div>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm font-bold whitespace-nowrap"
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationConnectivity;
