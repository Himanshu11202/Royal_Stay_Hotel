"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "@/components/luxury-image";

interface LightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex !== null) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && currentIndex !== null) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };
    
    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // disable scroll
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // enable scroll
    };
  }, [currentIndex, images, onNavigate, onClose]);

  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 border border-white/10 text-white/70 hover:text-primary hover:border-primary transition-all duration-300 focus:outline-none"
        >
          <X size={20} />
        </button>

        {/* Prev Arrow */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-6 p-4 border border-white/5 hover:border-primary text-white/50 hover:text-primary transition-all duration-300 focus:outline-none"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Arrow */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-6 p-4 border border-white/5 hover:border-primary text-white/50 hover:text-primary transition-all duration-300 focus:outline-none"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Container */}
        <div className="relative w-[90vw] h-[80vh] flex items-center justify-center select-none">
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full h-full max-w-5xl"
          >
            <Image
              src={images[currentIndex]}
              alt={`Palace Gallery Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        </div>

        {/* Indicator */}
        <div className="absolute bottom-6 font-sans text-xs uppercase tracking-[0.2em] text-white/40">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Lightbox;
