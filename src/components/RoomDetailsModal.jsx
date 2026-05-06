import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, IndianRupee, Shield, Wind, Coffee, Zap } from 'lucide-react';

const RoomDetailsModal = ({ isOpen, onClose, room, onBook }) => {
  if (!room) return null;

  const extraFeatures = {
    "Single Room": [
      { icon: Shield, text: "Maximum Privacy" },
      { icon: Wind, text: "Natural Ventilation" },
      { icon: Zap, text: "Dedicated Study Point" },
      { icon: Coffee, text: "Geyser & Shower" }
    ],
    "Double Room": [
      { icon: Shield, text: "Personal Locker" },
      { icon: Wind, text: "Private Balcony" },
      { icon: Zap, text: "Attached Washroom" },
      { icon: Coffee, text: "Dual Wardrobes" }
    ],
    "Triple Sharing": [
      { icon: Shield, text: "Individual Storage" },
      { icon: Wind, text: "Airy & Spacious" },
      { icon: Zap, text: "Power Backup" },
      { icon: Coffee, text: "Community Living" }
    ]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[40px] shadow-premium overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={room.image} 
                alt={room.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 md:hidden">
                <h3 className="text-2xl font-bold text-white">{room.title}</h3>
                <p className="text-white/80">{room.price}/mo</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="hidden md:block mb-8">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">ROOM OVERVIEW</span>
                <h3 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-2">{room.title}</h3>
                <div className="flex items-center text-primary font-bold text-2xl">
                  <IndianRupee size={22} className="mr-1" />
                  <span>{room.price.replace('₹', '')}</span>
                  <span className="text-slate-400 text-sm font-medium ml-2">/ month</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Core Amenities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={18} className="text-secondary" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Why Choose This?</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {(extraFeatures[room.title] || []).map((item, i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                          <item.icon size={20} />
                        </div>
                        <span className="text-sm font-bold text-slate-800 dark:text-white">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => {
                      onBook(room.title.toLowerCase().split(' ')[0]);
                      onClose();
                    }}
                    className="w-full btn-primary py-5 text-lg font-bold shadow-xl shadow-primary/20"
                  >
                    Proceed to Booking
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoomDetailsModal;
