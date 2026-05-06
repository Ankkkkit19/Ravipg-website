import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smile, Users, CreditCard } from 'lucide-react';

const WhyUsCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/5 border border-white/10 p-10 rounded-[50px] backdrop-blur-xl group hover:bg-white/10 transition-all duration-500"
  >
    <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold font-heading text-white mb-4">{title}</h3>
    <p className="text-white/60 leading-relaxed text-lg">
      {description}
    </p>
  </motion.div>
);

const WhyUs = () => {
  const reasons = [
    { 
      icon: Shield, 
      title: "Elite Security", 
      description: "Top-tier security with professional guards on-site, restricted entry, and 24/7 CCTV monitoring." 
    },
    { 
      icon: Smile, 
      title: "Luxury Comfort", 
      description: "Premium spring mattresses, designer interiors, and well-ventilated rooms for a peaceful stay." 
    },
    { 
      icon: Users, 
      title: "Vibrant Community", 
      description: "Connect with like-minded students and professionals in our beautiful common lounges." 
    },
    { 
      icon: CreditCard, 
      title: "Transparent Pricing", 
      description: "No hidden costs. Clear billing for electricity and zero maintenance charges." 
    }
  ];

  return (
    <section className="py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
            >
              EXPERIENCE ELITE LIVING
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight"
            >
              Designed for Your <br /><span className="text-accent">Growth & Safety</span>
            </motion.h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-full px-8 py-4 backdrop-blur-md hidden lg:block">
            <p className="text-white/60 font-medium">✨ Preferred choice of 500+ families</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <WhyUsCard key={index} {...reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
