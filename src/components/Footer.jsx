import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white/60 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold font-heading text-white">
                Ravi's <span className="text-primary">Elite</span> PG
              </span>
            </div>
            <p className="mb-8 leading-relaxed text-lg">
              Providing premium, secure, and affordable accommodation for everyone in Dehradun. Experience a home away from home with us.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Rooms', 'Amenities', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>Manduwala Chowk, Near Dev Bhoomi Uttarakhand University, Dolphin PG College & UPES, Dehradun, 248007</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 88602 28903</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span>rs1157226@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Newsletter</h4>
            <p className="mb-6 text-sm">Subscribe to get updates on availability and special offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-xl hover:bg-blue-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm">
          <p>© 2024 Ravi's Elite PG. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
