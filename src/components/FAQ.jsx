import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left transition-colors hover:text-primary"
      >
        <span className="text-xl font-bold font-heading text-slate-800 dark:text-white">
          {question}
        </span>
        <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is food included in the monthly rent?",
      answer: "Yes! We provide three nutritious home-style meals a day (Breakfast, Lunch, and Dinner) along with evening tea. We focus on a balanced diet and use fresh ingredients daily."
    },
    {
      question: "What security measures are in place for residents?",
      answer: "Safety is our top priority. We have 24/7 CCTV surveillance, biometric entry systems, and a dedicated warden on-site. Every room has secure locks, and the main gate is monitored round the clock."
    },
    {
      question: "What is your refund and cancellation policy?",
      answer: "We offer a flexible security deposit system. If you plan to leave, a 1-month notice is required for a full refund of your security deposit, provided there are no damages to the property."
    },
    {
      question: "Do you have power backup for studies and work?",
      answer: "Yes, we have high-capacity inverters and generator backup to ensure 24/7 power supply, especially for the high-speed WiFi and common study areas."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-offWhite dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">HAVE QUESTIONS?</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800/50 rounded-[40px] p-8 md:p-12 shadow-soft border border-slate-100 dark:border-slate-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
