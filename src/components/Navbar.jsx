import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className={`text-2xl font-bold font-heading transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
            Ravi's <span className="text-primary">Elite</span> PG
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`nav-link transition-colors ${scrolled ? 'text-slate-600 dark:text-slate-400 dark:hover:text-primary' : 'text-white/90 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${scrolled ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400' : 'bg-white/10 text-white'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="flex items-center space-x-4">
            <a href="tel:+918860228903" className="btn-primary py-2 px-6 text-sm flex items-center space-x-2 shadow-lg shadow-primary/20">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className={scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}>
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 md:hidden"
          >
            <div className="flex flex-col h-full p-8 pt-24 space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold font-heading text-slate-800 dark:text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-12 mt-auto flex flex-col space-y-4">
                <a href="tel:+918860228903" className="btn-primary w-full py-5 text-center flex justify-center items-center space-x-3 text-lg">
                  <Phone size={24} />
                  <span>Contact Manager</span>
                </a>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
