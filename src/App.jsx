import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import LocationConnectivity from './components/LocationConnectivity';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Preloader from './components/Preloader';
import BookingModal from './components/BookingModal';
import RoomDetailsModal from './components/RoomDetailsModal';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [bookingModal, setBookingModal] = useState({ isOpen: false, type: 'single' });
  const [detailsModal, setDetailsModal] = useState({ isOpen: false, room: null });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openBooking = (type = 'single') => setBookingModal({ isOpen: true, type });
  const closeBooking = () => setBookingModal({ ...bookingModal, isOpen: false });

  const openDetails = (room) => setDetailsModal({ isOpen: true, room });
  const closeDetails = () => setDetailsModal({ isOpen: false, room: null });

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero onBook={openBooking} />
          <TrustStats />
          <Rooms onBook={openBooking} onDetails={openDetails} />
          <Amenities />
          <LocationConnectivity />
          <Gallery />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        
        {/* Floating Actions */}
        <WhatsAppFab />
        
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed md:bottom-32 bottom-48 right-6 md:right-10 z-40 w-12 h-12 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 hover:bg-primary hover:text-white transition-all"
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                ↑
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile Sticky CTA Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 p-4 flex space-x-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <a href="tel:+918860228903" className="flex-1 flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white py-3 rounded-2xl font-bold">
            <Phone size={20} />
            <span>Call</span>
          </a>
          <button 
            onClick={() => openBooking()}
            className="flex-2 flex items-center justify-center space-x-2 bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20"
          >
            <Calendar size={20} />
            <span>Book Now</span>
          </button>
        </div>

        <BookingModal 
          isOpen={bookingModal.isOpen} 
          onClose={closeBooking} 
          initialRoomType={bookingModal.type} 
        />

        <RoomDetailsModal 
          isOpen={detailsModal.isOpen} 
          onClose={closeDetails} 
          room={detailsModal.room}
          onBook={openBooking}
        />
      </div>
    </>
  );
}

export default App;
