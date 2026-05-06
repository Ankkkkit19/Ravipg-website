import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Student, DBUU",
      review: "Ravi's Elite PG truly feels like home. The security is amazing, and the food is the best I've had in any PG in Dehradun. Highly recommended!",
      rating: 5,
      image: avatar1
    },
    {
      name: "Rahul Verma",
      role: "Software Developer",
      review: "The amenities here are top-notch. From high-speed WiFi to the quiet study zone, everything is designed to help you focus on your goals.",
      rating: 5,
      image: avatar4
    },
    {
      name: "Ananya Iyer",
      role: "Working Professional",
      review: "Clean rooms and a peaceful environment. The management is very responsive to any issues. Best place for students and professionals alike.",
      rating: 5,
      image: avatar2
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-offWhite dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">HAPPY RESIDENTS</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 dark:text-white mb-8">
              Loved by <span className="text-primary">Ambitious</span> Residents
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-12 max-w-lg">
              Don't just take our word for it. Hear what our community members have to say about their experience at Ravi's Elite PG.
            </p>
            <div className="flex space-x-4">
              <button onClick={prev} className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            className="lg:w-1/2 w-full relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute -top-12 -left-12 text-primary/10 select-none">
              <Quote size={180} />
            </div>
            
            <div className="relative h-[450px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[60px] shadow-premium dark:shadow-none border border-slate-100 dark:border-slate-800 w-full"
                >
                  <div className="flex items-center space-x-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < reviews[index].rating ? "#f97316" : "none"} 
                        className={i < reviews[index].rating ? "text-accent" : "text-slate-200 dark:text-slate-700"} 
                      />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-10 leading-relaxed italic">
                    "{reviews[index].review}"
                  </p>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20">
                      <img src={reviews[index].image} alt={reviews[index].name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xl">{reviews[index].name}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">{reviews[index].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Progress Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${index === i ? 'w-12 bg-primary' : 'w-2 bg-slate-200 dark:bg-slate-800'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
