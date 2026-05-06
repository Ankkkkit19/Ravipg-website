import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Info } from 'lucide-react';
import singleRoom from '../assets/room_single.png';
import doubleRoom from '../assets/room_double.png';
import tripleRoom from '../assets/room_triple.png';

const RoomCard = ({ title, price, features, image, availability, index, onBook, onDetails }) => {
  const isUrgent = availability.includes('Left') || availability.includes('Few');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-soft dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col h-full group transition-all duration-300 hover:shadow-premium dark:hover:border-primary/30"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 flex flex-col space-y-2">
          {isUrgent && (
            <div className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center shadow-lg animate-pulse">
              <TrendingUp size={14} className="mr-2" />
              URGENT: {availability}
            </div>
          )}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md w-fit">
            <span className="text-primary font-bold text-xl">{price}</span>
            <span className="text-slate-500 text-sm ml-1">/mo</span>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">{title}</h3>
          <button 
            onClick={() => onDetails({ title, price, features, image })}
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <Info size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
              <CheckCircle2 size={16} className="text-secondary shrink-0" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex space-x-4">
          <button 
            onClick={() => onBook(title.toLowerCase().split(' ')[0])}
            className="flex-2 btn-primary py-4 text-sm font-bold shadow-lg shadow-primary/20"
          >
            Book Now
          </button>
          <button 
            onClick={() => onDetails({ title, price, features, image })}
            className="flex-1 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Rooms = ({ onBook, onDetails }) => {
  const rooms = [
    {
      title: "Single Room",
      price: "₹6500",
      features: ["Fiber WiFi", "Geyser", "Study Desk", "Wardrobe"],
      image: singleRoom,
      availability: "Available Now",
    },
    {
      title: "Double Room",
      price: "₹7500",
      features: ["Premium Beds", "Balcony View", "Safe Locker", "Power Backup"],
      image: doubleRoom,
      availability: "Only 2 Left!",
    },
    {
      title: "Triple Sharing",
      price: "₹8500",
      features: ["Hygienic Stay", "Storage Unit", "Power Backup", "24/7 Security"],
      image: tripleRoom,
      availability: "Few Seats Left",
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-offWhite dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
        >
          PREMIUM ACCOMMODATION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white"
        >
          Choose Your <span className="italic text-primary">Luxury</span> Stay
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} index={index} onBook={onBook} onDetails={onDetails} />
        ))}
      </div>
    </section>
  );
};

export default Rooms;
