import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, CheckCircle, Home, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, initialRoomType }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: initialRoomType || 'single',
    date: ''
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hi Ravi Shankar, I want to book a room.%0A%0A*Booking Details:*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Room Type: ${formData.roomType}%0A- Expected Date: ${formData.date}`;
    
    const whatsappUrl = `https://wa.me/918860228903?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[40px] shadow-premium overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>

              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Home size={32} />
                    </div>
                    <h3 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-2">Reserve Your Spot</h3>
                    <p className="text-slate-500 dark:text-slate-400">Join our elite community in Dehradun</p>
                  </div>

                  <form onSubmit={handleNext} className="space-y-6">
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                        <Home size={20} />
                      </div>
                      <select 
                        value={formData.roomType}
                        onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary appearance-none"
                      >
                        <option value="single">Single Sharing - ₹6500</option>
                        <option value="double">Double Sharing - ₹7500</option>
                        <option value="triple">Triple Sharing - ₹8500</option>
                      </select>
                    </div>

                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                        <Calendar size={20} />
                      </div>
                      <input 
                        type="date"
                        required
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary"
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>

                    <button className="w-full btn-primary py-5 text-lg font-bold shadow-xl shadow-primary/20">
                      Next Step
                    </button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-2">Final Details</h3>
                    <p className="text-slate-500 dark:text-slate-400">Almost there! Just a few more things.</p>
                  </div>

                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                        <User size={20} />
                      </div>
                      <input 
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                        <Phone size={20} />
                      </div>
                      <input 
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="flex space-x-4">
                      <button 
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 py-5 rounded-2xl font-bold"
                      >
                        Back
                      </button>
                      <button className="flex-2 btn-primary py-5 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 'loading' && (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-8" />
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">Processing Booking...</h3>
                </div>
              )}

              {step === 'success' && (
                <div className="py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-8">
                    <CheckCircle size={60} />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">Request Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto text-lg leading-relaxed">
                    Our manager will call you shortly to confirm the availability.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-12 btn-primary px-12 py-4"
                  >
                    Got it!
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
