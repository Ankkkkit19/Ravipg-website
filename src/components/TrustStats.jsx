import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Users, Calendar, Shield, Headset } from 'lucide-react';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const TrustStats = () => {
  const stats = [
    { icon: Users, value: 200, suffix: "+", label: "Happy Residents" },
    { icon: Calendar, value: 5, suffix: "+", label: "Years Experience" },
    { icon: Shield, value: 100, suffix: "%", label: "Secure Living" },
    { icon: Headset, value: 24, suffix: "/7", label: "Support" }
  ];

  return (
    <section className="py-20 bg-primary dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/70 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
