import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import heroImg from '../assets/hero.png';
import singleRoom from '../assets/room_single.png';
import doubleRoom from '../assets/room_double.png';
import tripleRoom from '../assets/room_triple.png';
import messImg from '../assets/mess.png';
import studyImg from '../assets/study.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    { src: heroImg, title: "Exterior & Entrance" },
    { src: singleRoom, title: "Premium Single Room" },
    { src: doubleRoom, title: "Spacious Double Sharing" },
    { src: tripleRoom, title: "Budget Triple Sharing" },
    { src: messImg, title: "Hygienic Dining Area" },
    { src: studyImg, title: "Quiet Study Zone" }
  ];

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    let nextIndex = currentIndex + direction;
    if (nextIndex >= images.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = images.length - 1;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">VIRTUAL TOUR</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white">
              Take a Peek Inside <br /><span className="text-primary italic">Our Elite World</span>
            </h2>
          </div>
          <button 
            onClick={() => setShowVideo(true)}
            className="group flex items-center space-x-4 bg-primary text-white pl-8 pr-4 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/30"
          >
            <span>Watch Virtual Tour</span>
            <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Play size={20} fill="currentColor" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative h-80 rounded-[40px] overflow-hidden cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl mb-2">{image.title}</p>
                <div className="flex items-center text-white/70 text-sm">
                  <Maximize2 size={16} className="mr-2" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
              >
                <X size={40} />
              </button>

              <button 
                onClick={() => navigateImage(-1)}
                className="absolute left-4 z-10 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/20"
              >
                <ChevronLeft size={32} />
              </button>

              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl shadow-black/50"
              />

              <button 
                onClick={() => navigateImage(1)}
                className="absolute right-4 z-10 w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/20"
              >
                <ChevronRight size={32} />
              </button>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="text-2xl font-bold font-heading">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors bg-black/40 p-2 rounded-full backdrop-blur-md"
              >
                <X size={24} />
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Ravi's Elite PG Tour" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
