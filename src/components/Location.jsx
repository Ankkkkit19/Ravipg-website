import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Hospital, Train, ShoppingBag, Navigation } from 'lucide-react';

const Location = () => {
  const nearby = [
    { icon: GraduationCap, title: "DBUU", distance: "2.0 km", time: "5 min drive" },
    { icon: Hospital, title: "Max Hospital", distance: "500 m", time: "2 min walk" },
    { icon: Train, title: "Railway Station", distance: "8.0 km", time: "15 min drive" },
    { icon: ShoppingBag, title: "Paltan Market", distance: "4.5 km", time: "10 min drive" }
  ];

  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">OUR PRIME LOCATION</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-8">
              Stay in the <span className="text-primary italic">Heart</span> of Dehradun
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-xl">
              Ravi's Elite PG is strategically located near major universities, healthcare centers, and transport hubs. Enjoy easy accessibility while staying in a peaceful, lush green neighborhood.
            </p>

            <div className="space-y-6 mb-10">
              {nearby.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-offWhite rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mr-5">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.distance} • {item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
              <Navigation size={20} />
              <span>Get Directions</span>
            </button>
          </div>

          <div className="lg:w-1/2 w-full h-[500px] rounded-3xl overflow-hidden shadow-premium border-8 border-offWhite relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110226.54010777596!2d77.947081!3d30.322232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c03251d499!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1715500000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ravi's Elite PG Location"
              className="grayscale-[0.2] transition-all group-hover:grayscale-0"
            ></iframe>
            <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 animate-bounce">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-primary" />
                <span className="font-bold text-slate-800">Visit Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
