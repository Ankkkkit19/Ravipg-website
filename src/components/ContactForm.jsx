import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Loader2 } from 'lucide-react';

const schema = yup.object().shape({
  name: yup.string().required('Full name is required').min(3, 'At least 3 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required').matches(/^[0-9]{10}$/, 'Must be 10 digits'),
  roomType: yup.string().required('Select room type'),
  message: yup.string().min(10, 'Message too short')
});

const InputField = ({ label, register, name, error, type = "text", icon: Icon }) => (
  <div className="relative mb-6 group">
    <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${error ? 'text-red-400' : 'text-slate-400 group-focus-within:text-primary'}`}>
      <Icon size={20} />
    </div>
    <input 
      type={type}
      {...register(name)}
      className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${error ? 'border-red-500/50' : 'border-slate-200 dark:border-slate-700'} rounded-3xl py-5 pl-14 pr-6 text-slate-900 dark:text-white focus:border-primary dark:focus:border-primary focus:ring-0 focus:outline-none transition-all placeholder:text-transparent peer`}
      placeholder={label}
    />
    <label className={`absolute left-14 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:left-8 peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-focus:px-2 peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-8 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-primary peer-[:not(:placeholder-shown)]:font-bold`}>
      {label}
    </label>
    {error && <p className="text-red-500 text-xs mt-2 ml-4 font-medium">{error.message}</p>}
  </div>
);

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const message = `Hi Ravi Shankar, I have a new inquiry from the website.%0A%0A*Contact Details:*%0A- Name: ${data.name}%0A- Email: ${data.email}%0A- Phone: ${data.phone}%0A- Preferred Room: ${data.roomType}%0A- Message: ${data.message}`;
    
    const whatsappUrl = `https://wa.me/918860228903?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[60px] overflow-hidden shadow-premium dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row">
          {/* Contact Details */}
          <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold font-heading mb-8">Get in Touch</h2>
              <p className="text-white/80 mb-12 text-lg leading-relaxed">
                Experience the best PG in Dehradun. Have questions? Our team is here to help you 24/7.
              </p>

              <div className="space-y-10">
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Email Support</p>
                    <p className="text-xl font-bold">rs1157226@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Call Us Now</p>
                    <p className="text-xl font-bold">+91 88602 28903</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Visit Us</p>
                    <p className="text-xl font-bold">Manduwala Chowk, Near Dev Bhoomi & Dolphin College, Dehradun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-8"
                  >
                    <CheckCircle size={64} />
                  </motion.div>
                  <h3 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg max-w-sm mx-auto">
                    Thanks for reaching out! We'll contact you within the next 2 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Full Name" register={register} name="name" error={errors.name} icon={Mail} />
                    <InputField label="Mobile Number" register={register} name="phone" error={errors.phone} icon={Phone} />
                  </div>
                  <InputField label="Email Address" register={register} name="email" error={errors.email} icon={Mail} />
                  
                  <div className="relative mb-6">
                    <select 
                      {...register('roomType')}
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.roomType ? 'border-red-500/50' : 'border-slate-200 dark:border-slate-700'} rounded-3xl py-5 px-6 text-slate-900 dark:text-white focus:border-primary focus:outline-none appearance-none font-medium transition-all`}
                    >
                      <option value="">Preferred Room Type</option>
                      <option value="single">Single Sharing</option>
                      <option value="double">Double Sharing</option>
                      <option value="triple">Triple Sharing</option>
                    </select>
                    {errors.roomType && <p className="text-red-500 text-xs mt-2 ml-4 font-medium">{errors.roomType.message}</p>}
                  </div>

                  <div className="relative mb-8">
                    <textarea 
                      {...register('message')}
                      rows="4"
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-200 dark:border-slate-700'} rounded-[30px] px-8 py-5 text-slate-900 dark:text-white focus:border-primary focus:outline-none transition-all resize-none font-medium`}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-2 ml-4 font-medium">{errors.message.message}</p>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full btn-primary py-5 text-xl font-bold flex justify-center items-center space-x-4 disabled:opacity-70 disabled:cursor-not-allowed group transition-all"
                  >
                    {isSubmitting ? (
                      <Loader2 size={24} className="animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
