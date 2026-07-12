"use client";

import React, { useState, useEffect } from "react";
import reviewsData from "@/data/reviews.json";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Auto play
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const currentReview = reviewsData[activeIdx];

  return (
    <section className="relative w-full bg-luxury-black py-32 px-6 md:px-12 border-b border-white/5 overflow-hidden">
      
      {/* Background Decors */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <Quote size={300} className="text-white" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Subtitle */}
        <span className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary font-semibold mb-8">
          VOICES OF THE ROYAL ENCLOSURE
        </span>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] w-full flex items-center justify-center px-4 md:px-12">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center space-y-6"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-3xl font-light leading-relaxed italic text-white/90">
                "{currentReview.quote}"
              </blockquote>

              {/* Guest Details */}
              <div className="flex flex-col items-center space-y-1">
                <cite className="font-serif text-lg text-primary uppercase not-italic tracking-wider">
                  {currentReview.name}
                </cite>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/40">
                  {currentReview.location} • Stayed {currentReview.stayDate}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-white/10 hover:border-primary text-white/50 hover:text-primary flex items-center justify-center transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft size={18} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIdx ? 1 : -1);
                  setActiveIdx(idx);
                }}
                className={`w-1.5 h-1.5 transition-all duration-300 ${
                  activeIdx === idx ? "w-6 bg-primary" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-white/10 hover:border-primary text-white/50 hover:text-primary flex items-center justify-center transition-all duration-300 focus:outline-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
export default Testimonials;
