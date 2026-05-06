import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, School, Train, Bus, ShoppingCart } from 'lucide-react';

const InteractiveMap = () => {
  const locations = [
    { name: "Dolphin PG College", distance: "800 m", icon: School, type: "College" },
    { name: "Dev Bhoomi University", distance: "1.2 km", icon: School, type: "College" },
    { name: "Manduwala Chowk", distance: "200 m", icon: MapPin, type: "Landmark" },
    { name: "UPES (Manduwala)", distance: "4.5 km", icon: School, type: "College" },
    { name: "Nearest Market", distance: "600 m", icon: ShoppingCart, type: "Utility" },
    { name: "Railway Station", distance: "10 km", icon: Train, type: "Transport" },
    { name: "ISBT Bus Stand", distance: "12 km", icon: Bus, type: "Transport" },
  ];

  return (
    <section id="location" className="py-24 bg-offWhite dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Info Sidebar */}
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              LOCATION GUIDE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6"
            >
              Minutes away from <span className="text-primary italic">Everything</span>
            </motion.h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
              We are strategically located in Manduwala, the education hub of Dehradun, making it effortless for students and professionals to commute.
            </p>

            <div className="space-y-4">
              {locations.map((loc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800 group hover:border-primary transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary rounded-xl flex items-center justify-center transition-all">
                      <loc.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm">{loc.name}</h4>
                      <p className="text-xs text-slate-400">{loc.type}</p>
                    </div>
                  </div>
                  <span className="text-primary font-black text-sm">{loc.distance}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.google.com/maps/dir//Manduwala+Chowk,+Dehradun"
              target="_blank"
              className="mt-10 w-full btn-primary py-5 flex items-center justify-center space-x-3 text-lg font-bold shadow-xl shadow-primary/20"
            >
              <Navigation size={22} />
              <span>Get Directions on Map</span>
            </motion.a>
          </div>

          {/* Map Section */}
          <div className="lg:w-2/3 w-full h-[500px] lg:h-[700px] rounded-[50px] overflow-hidden shadow-premium border-8 border-white dark:border-slate-900 relative">
            {/* Real Google Map Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13771.696328320144!2d77.892694!3d30.353683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2b3e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sManduwala%20Chowk%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PG Location Map"
              className="grayscale-[0.2] contrast-[1.1] dark:invert dark:hue-rotate-180"
            ></iframe>
            
            {/* Overlay Banner */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ravi's Elite PG</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Manduwala Chowk, Dehradun</p>
                </div>
              </div>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Resident" />
                  </div>
                ))}
                <div className="h-10 px-4 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white dark:border-slate-800">
                  200+ Residents Live Nearby
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
